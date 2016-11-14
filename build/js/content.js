

console.log('the degender content script is totes active')


//build a div to go at the top of the page
let topBar = document.createElement("div");

topBar.setAttribute('id', 'degender-bar');
topBar.className = 'hide'

document.body.insertBefore(topBar, document.body.firstChild);


//object to contain info about oage for analytics
let pageStats = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}

//in order to add tags around the changes, need to access the text in a different way :(
let allElements = document.body.getElementsByTagName("*");

const copyHTML = ()=> {
  let HTMLarr = [];
  for (let i =0; i < allElements.length; i++) {
    HTMLarr.push(allElements[i].innerHTML)
  }
  return HTMLarr
}

let orginalHTML = copyHTML();

//would still be nice to not have to go over elements with no innerHTML


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

const convert = () => {
  //core logic of converter
  for (let i = 0; i < allElements.length; i++) {
    let eleArr = allElements[i].innerHTML.split(' ');
    for (let j=0; j < eleArr.length; j++) {
      if (pronouns[eleArr[j]]) {
        if (pageStats.pronouns[eleArr[j]]) pageStats.pronouns[eleArr[j]]++
        else pageStats.pronouns[eleArr[j]] = 1
        console.log(eleArr[j])
        eleArr[j] = '<span class=\'converted pronoun\'>' + pronouns[eleArr[j]] + '</span>'
      }
      if (nouns[eleArr[j]]) {
        if (pageStats.nouns[eleArr[j]]) pageStats.nouns[eleArr[j]]++
        else pageStats.nouns[eleArr[j]] = 1
        eleArr[j] = '<span class=\'converted noun\'>' + nouns[eleArr[j]] + '</span>'
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
    allElements[i].innerHTML = orginalHTML[i];
  }
  document.body.childNodes[2].style.marginTop = '0px';
  topBar.className = 'hide'
}

const colorPronouns = () => {
  let changedPro = document.getElementsByClassName('converted pronoun')
  for (let i = 0; i < changedPro.length; i++) {
    changedPro[i].className = changedPro[i].className + ' active-converted'
  }
}

const colorNouns = () => {
  let changedNoun = document.getElementsByClassName('converted noun')
  for (let i = 0; i < changedNoun.length; i++) {
    changedNoun[i].className = changedNoun[i].className + ' active-converted'
  }
}

const colorAdj = () => {
  let changedAdj = document.getElementsByClassName('converted adj')
  for (let i = 0; i < changedAdj.length; i++) {
    changedAdj[i].className = changedAdj[i].className + ' active-converted'
  }
}

const colorAll = () => {
  let changed = document.getElementsByClassName('converted')
  for (let i = 0; i < changed.length; i++) {
    changed[i].className = changed[i].className + ' active-converted'
  }
}

const addListens = () => {
  document.getElementById("revert").addEventListener("click", revertPage);
  document.getElementById("highPro").addEventListener("click", colorPronouns);
  document.getElementById("highAdj").addEventListener("click", colorAdj);
  document.getElementById("highNoun").addEventListener("click", colorNouns);
  document.getElementById("highAll").addEventListener("click", colorAll);
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log('in listener', request)
  switch (request.message) {
    case 'convert':
      if (document.documentElement.lang !== 'en') {
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

