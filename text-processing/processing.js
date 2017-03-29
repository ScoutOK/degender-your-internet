'use strict'

import renderTopbar from '../content/Main.jsx';


//boolean to control react rendering VERY IMPORTANT
let renderBar = false;
let beenConverted = false;
let convertedText;
const allText = document.body.innerHTML;

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
  Sister: "sibling",
  father: 'parent',
  Father: 'Parent',
  mother: 'parent',
  Mother: 'Parent',
  girlfriend: 'partner',
  Girlfriend: 'Partner',
  boyfriend: 'partner',
  Boyfriend: 'Partner'
}

//object to contain info about page for analytics
const pageStats = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}

const createTopbar = (data, oldText, newText) => {
  //build a div to go at the top of the page
  let topBar = document.createElement("div");

  topBar.setAttribute('id', 'degender-bar');
  //topBar.className = 'hide'

  document.body.insertBefore(topBar, document.body.firstChild);

  //render the topbar
  renderTopbar(data, oldText, newText);
  return topBar

}

const revertPage = (original) => {
  document.getElementById('degender-wrapper').innerHTML = original;
}

// const addListens = (allText) => {
//   document.getElementById("revert").addEventListener("click", () => revertPage(allText));
// }

const switchWords = (string) => {
  const arr = string.split(' ');
  return arr.map((word) => {
    let endPunc = ''
    //loop deals with ending punctuation
    while (!/^[a-zA-Z]/.test(word.slice(-1)) && word.length) {
      endPunc = word.slice(-1) + endPunc;
      word = word.slice(0, -1);
    }
    if (pronouns[word]){
      if (pageStats.pronouns[word.toLowerCase()]) pageStats.pronouns[word.toLowerCase()]++
      else pageStats.pronouns[word.toLowerCase()] = 1
      return `<span class='converted pronoun'>${pronouns[word]}</span>${endPunc}`
    }
    else if (nouns[word]) {
      if (pageStats.nouns[word.toLowerCase()]) pageStats.nouns[word.toLowerCase()]++
      else pageStats.nouns[word.toLowerCase()] = 1
      return `<span class='converted noun'>${nouns[word]}</span>${endPunc}`
    }
    else if (adjectives[word]) {
      if (pageStats.adjectives[word.toLowerCase()]) pageStats.adjectives[word.toLowerCase()]++
      else pageStats.adjectives[word.toLowerCase()] = 1
      return `<span class='converted adjective'>${adjectives[word]}</span>${endPunc}`
    }
    else return word + endPunc
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
  const degenderWrapper = `<div id='degender-wrapper'>${bodyInsides}</div>`
  document.body.innerHTML = degenderWrapper;

  switch (request.message) {
    case 'convert':
      if (beenConverted) {
        console.log('in herrrrrrreeee');
        revertPage(convertedText);
      } else {
        if (document.documentElement.lang !== 'en' && document.documentElement.lang !== 'en-US') {
          alert('WARNING: It appears this page is not in English. Currently Degender Your Internet is only equipped to handle pages in English. It could just be incorrectly marked. If you would like to help develop Degender Your Internet for other languages, please contact me');
        }

        document.getElementById('degender-wrapper').innerHTML = convert(bodyInsides);//something about this function is RUINING my onClicks
        convertedText = document.getElementById('degender-wrapper').innerHTML;
        const topBar = createTopbar(pageStats, allText, convertedText);
        //to set margin at top of original content
        //see if you can pass stuff to TopBar to make this addListens unnecessary
        // addListens(allText);
        sendResponse({pageStatus: 'converted'});
        beenConverted = true;
        
      }
      break
    case 'revert':
      revertPage(allText);
      sendResponse({pageStatus: 'original'});
      break
    default:
      sendResponse({error: 'that input makes no sense'})
  }
})

