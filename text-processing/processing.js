'use strict'

import nlp from 'compromise';
import renderTopbar from '../content/Main.jsx'

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

const createTopbar = () => {
  //build a div to go at the top of the page
  let topBar = document.createElement("div");

  topBar.setAttribute('id', 'degender-bar');
  //topBar.className = 'hide'

  document.body.insertBefore(topBar, document.body.firstChild);

  //render the topbar
  renderTopbar();
  return topBar

}

const revertPage = (original) => {
  document.getElementById('degender-wrapper').innerHTML = original;
}

const addListens = (allText) => {
  document.getElementById("revert").addEventListener("click", () => revertPage(allText));
}

const copyHTML = (elements)=> {
    let HTMLarr = [];
    for (let i =0; i < elements.length; i++) {
      HTMLarr.push(elements[i].innerHTML)
    }
    return HTMLarr
  }

console.log('the degender content script is totes active')
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  //console.log('in listener', request)

  //add wrapper around current body content
  const bodyInsides = document.body.innerHTML;
  //possibly need to do a clone at this point
  const originalBody = document.body.cloneNode(true);
  //console.log('~*~*~*~*~*~*~*~OriginalBody', originalBody)
  const degenderWrapper = `<div id='degender-wrapper'>${bodyInsides}</div>`
  document.body.innerHTML = degenderWrapper;

  //in order to add tags around the changes, need to access the text in a different way :(
  const allText = document.getElementById('degender-wrapper').innerHTML;

  //first test of compromise
  

  //would still be nice to not have to go over elements with no innerHTML

  const convert = () => {
    //core logic of converter
    const fancyText = nlp(allText);

    fancyText.match('#Pronoun').list.forEach(ele => {
      //console.log(ele.terms[0]._text);
      if (pronouns[ele.terms[0]._text]) {
        ele.terms[0]._text = `<span class='converted pronoun'>${pronouns[ele.terms[0]._text]}</span>`
      }
    })

    fancyText.match('#Noun').list.forEach(ele => {
      //console.log(ele.terms[0]._text);
      if (nouns[ele.terms[0]._text]) {
        ele.terms[0]._text = `<span class='converted noun'>${nouns[ele.terms[0]._text]}</span>`
      }
    })

    fancyText.match('#Adjective').list.forEach(ele => {
      if (adjectives[ele.terms[0]._text]) {
        ele.terms[0]._text = `<span class='converted adjective'>${adjectives[ele.terms[0]._text]}</span>`
      }
    })

    document.getElementById('degender-wrapper').innerHTML = fancyText.all().out();
   }

  switch (request.message) {
    case 'convert':
      if (document.documentElement.lang !== 'en' && document.documentElement.lang !== 'en-US') {
        alert('It appears this page is not in English. Currently Degender Your Internet is only equipped to handle pages in English. If you would like to help develop Degender Your Internet for other languages, please contact me');
        //const topBar = createTopbar();
        break
      }

      convert();//something about this function is RUINING my onClicks
      const topBar = createTopbar();
      //to set margin at top of original content
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

