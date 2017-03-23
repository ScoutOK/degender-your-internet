'use strict'

import nlp from 'compromise';

import renderTopbar from '../content/Main.jsx';


//boolean to control react rendering VERY IMPORTANT
let renderBar = false;

const pronouns = {
  he: "they",
  him: "them",
  his: "their",
  himself: "themself",
  she: "they",
  her: "them",
  hers: "theirs",
  herself: "themself",
  He: "They",
  Him: "Them",
  His: "Their",
  Himself: "Themself",
  She: "They",
  Her: "Them",
  Hers: "Theirs",
  Herself: "Themself",
}

const nouns = {
  man : "person",
  Man: "Person",
  men: "people",
  Men: "People",
  mens: "people's",
  Mens: "People's",
  boy: "child",
  Boy: "Child",
  boys: "children",
  Boys: "Children",
  "boy's": "children's",
  "Boy's": "Children's",
  woman: "person",
  Woman: "Person",
  women: "people",
  Women: "People",
  womens: "people's",
  Womens: "People's",
  girl: "child",
  Girl: "Child",
  girls: "children",
  Girls: "Children",
  "girl's": "children's",
  "Girl's": "Children's",
  husband: "spouse",
  Husbane: "Spouse",
  wife: "spouse",
  Wife: "Spouse",
  sister: "sibling",
  Sister: "sibling"
}

const adjectives = {
  feisty: "lively",
  frisky: "spirited",
  irritable: "grouchy",
  ambitious: "determined",
  abrasive: "unpleasant",
  nasty: "disagreeable",
  bitchy: "mean",
  bossy: "forceful",
  bubbly: "friendly",
  curvy: "robust",
  ditzy: "careless",
  emotional: "impassioned",
  frigid: "serious",
  frumpy: "un-made-up",
  "high-maintenence": "exacting",
  hysterical: "furious",
  illogical: "incorrectsass",
  irrational: "incorrect",
  pushy: "assertive",
  sassy: "bold",
  shrill: "assertive",
  exotic: "unusual",
  brash: "cocksure",
  catty: "mean",
  slutty: "sexually-active",//don't really have a neutral for this
  pretty: "attractive",
  handsome: "attractive",
  studly: "hot",
  charming: "pleasant",
  aggressive: "determined",
  cocky: "self-confident",
  arrogant: "overconfident",
}

//object to contain info about page for analytics
const pageStats = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}

const createTopbar = (data) => {
  //build a div to go at the top of the page
  let topBar = document.createElement("div");

  topBar.setAttribute('id', 'degender-bar');
  //topBar.className = 'hide'

  document.body.insertBefore(topBar, document.body.firstChild);

  //render the topbar
  renderTopbar(data);
  return topBar

}

const revertPage = (original) => {
  document.getElementById('degender-wrapper').innerHTML = original;
}

const addListens = (allText) => {
  document.getElementById("revert").addEventListener("click", () => revertPage(allText));
}

const switchWords = (string) => {
  const arr = string.split(' ');
  return arr.map((word) => {
    if (pronouns[word]) return `<span class='converted pronoun'>${pronouns[word]}</span>`
    else if (nouns[word]) return `<span class='converted noun'>${nouns[word]}</span>`
    else if (adjectives[word]) return `<span class='converted adjective'>${adjectives[word]}</span>`
    else return word
  }).join(' ')
}

const convert = (text) => {
  //core logic of converter
  let carrotedArr = [];
  let lookingFor = '<';
  //Step 1: convert string into array with '<' and '>' in their own separate pieces
  while (text.indexOf('<') > -1 || text.indexOf('>') > -1) {
    const indx = text.indexOf(lookingFor);
    carrotedArr.push(text.slice(0, indx));
    carrotedArr.push(lookingFor);
    text = text.slice(indx+1)
    if (lookingFor === '<') lookingFor = '>'
    else lookingFor = '<'
  }
  carrotedArr.push(text);

  let lastVisited = '>'

   //Step 2: Go through and process, but only pieces between > and <
  const convertedArr = carrotedArr.map(str => {
    if (str === '<'){
      lastVisited = '<'
      return str
    }
    if (str === '>'){
      lastVisited = '>'
      return str
    }
    if (lastVisited === '>') return switchWords(str);
    return str
  })
  
 return convertedArr.join('');
}

console.log('the degender content script is totes active')
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  //add wrapper around current body content
  const bodyInsides = document.body.innerHTML;
  const originalBody = document.body.cloneNode(true);
  const degenderWrapper = `<div id='degender-wrapper'>${bodyInsides}</div>`
  document.body.innerHTML = degenderWrapper;

  // //in order to add tags around the changes, need to access the text in a different way :(
  const allText = document.getElementById('degender-wrapper').innerHTML;

  switch (request.message) {
    case 'convert':
      if (document.documentElement.lang !== 'en' && document.documentElement.lang !== 'en-US') {
        alert('It appears this page is not in English. Currently Degender Your Internet is only equipped to handle pages in English. If you would like to help develop Degender Your Internet for other languages, please contact me');
        //const topBar = createTopbar();
        break
      }

      document.getElementById('degender-wrapper').innerHTML = convert(bodyInsides);//something about this function is RUINING my onClicks
      //console.log(pageStats)
      const topBar = createTopbar(pageStats);
      //to set margin at top of original content
      //see if you can pass stuff to TopBar to make this addListens unnecessary
      addListens(allText);
      sendResponse({pageStatus: 'converted'});
      break
    case 'revert':
      revertPage(allText);
      sendResponse({pageStatus: 'original'});
      break
    default:
      sendResponse({error: 'that input makes no sense'})
  }
})

