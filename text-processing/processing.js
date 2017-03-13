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

const adj = {
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

console.log('the degender content script is totes active')
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log('in listener', request)

  const topBar = createTopbar();

  //in order to add tags around the changes, need to access the text in a different way :(
  let allElements = document.body.getElementsByTagName("*");

  const copyHTML = ()=> {
    let HTMLarr = [];
    for (let i =0; i < allElements.length; i++) {
      HTMLarr.push(allElements[i].innerHTML)
    }
    return HTMLarr
  }

  let originalHTML = copyHTML();

  //first test of compromise
  originalHTML.forEach(string => {
    console.log(string, nlp(string).data())
    //console.log(string, nlp.text(string).tags())
  })

  //would still be nice to not have to go over elements with no innerHTML

  const convert = () => {
    //core logic of converter
    for (let i = 0; i < allElements.length; i++) {
      let eleArr = allElements[i].innerHTML.split(' ');
      for (let j=0; j < eleArr.length; j++) {
        //see if bit ends with punctuation
        let end = ''
        if (!/([a-zA-Z])/.test(eleArr[j][eleArr[j].length - 1])) {
          end = eleArr[j][eleArr[j].length - 1]
          eleArr[j] = eleArr[j].substr(0, eleArr[j].length - 1)
        }
        if (pronouns[eleArr[j]]) {
          if (pageStats.pronouns[eleArr[j]]) pageStats.pronouns[eleArr[j]]++
          else pageStats.pronouns[eleArr[j]] = 1
          eleArr[j] = '<span class=\'converted pronoun\'>' + pronouns[eleArr[j]] +'</span>' + end
        } else if (nouns[eleArr[j]]) {
          if (pageStats.nouns[eleArr[j]]) pageStats.nouns[eleArr[j]]++
          else pageStats.nouns[eleArr[j]] = 1
          eleArr[j] = '<span class=\'converted noun\'>' + nouns[eleArr[j]] + '</span>' + end
        } else if (adj[eleArr[j]]) {
          if (pageStats.adjectives[eleArr[j]]) pageStats.adjectives[eleArr[j]]++
          else pageStats.adjectives[eleArr[j]] = 1
          eleArr[j] = '<span class=\'converted adj\'>' + adj[eleArr[j]] + '</span>' + end
        } else {
          eleArr[j] = eleArr[j] + end
        }
      }
      allElements[i].innerHTML = eleArr.join(' ')
    }
    //to help with styling
    console.log(pageStats)
    let offsetHeight = document.body.childNodes[0].offsetHeight;
    document.body.childNodes[2].style.marginTop = offsetHeight + 'px';
  }

  const revertPage = () => {
    for (let i =0; i < allElements.length; i++) {
      allElements[i].innerHTML = originalHTML[i];
    }
    document.body.childNodes[2].style.marginTop = '0px';
    topBar.className = 'hide'
  }

  const color = (speech) => {
    let changed = document.getElementsByClassName('converted ' + speech)
    for (let i = 0; i < changed.length; i++) {
      changed[i].className = changed[i].className + ' active-converted'
    }
  }

  const decolor = (speech) => {
    let changed = document.getElementsByClassName('converted ' + speech)
    for (let i = 0; i < changed.length; i++) {
      changed[i].className = 'converted ' + speech
    }
  }

  const addListens = () => {
    document.getElementById("revert").addEventListener("click", revertPage);
    document.getElementById("highPro").addEventListener("click", (evt) => {
      if (evt.target.className === 'active'){
        evt.target.className = ''
        decolor('pronoun')
      } else {
        color('pronoun')
        evt.target.className = 'active'
      }
    });
    document.getElementById("highAdj").addEventListener("click", (evt) => {
      if (evt.target.className === 'active'){
        evt.target.className = ''
        decolor('adj')
      } else {
        color('adj')
        evt.target.className = 'active'
      }
    });
    document.getElementById("highNoun").addEventListener("click", (evt) => {
      if (evt.target.className === 'active') {
        evt.target.className = ''
        decolor('noun')
      } else {
        color('noun')
        evt.target.className = 'active'
      }
    });
  }

  switch (request.message) {
    case 'convert':
      if (document.documentElement.lang !== 'en' && document.documentElement.lang !== 'en-US') {
        alert('It appears this page is not in English. Currently Degender Your Internet is only equipped to handle pages in English. If you would like to help develop Degender Your Internet for other languages, please contact me')
        break
      }
      topBar.className = ''
      convert();
      addListens();
      sendResponse({pageStatus: 'converted'});
      break
    case 'revert':
      revertPage();
      sendResponse({pageStatus: 'original'});
      break
    default:
      sendResponse({error: 'that input makes no sense'})
  }
})

