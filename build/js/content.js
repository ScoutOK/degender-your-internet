

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
}

const convert = () => {
  //core logic of converter
  for (let i = 0; i < allElements.length; i++) {
    let eleArr = allElements[i].innerHTML.split(' ');
    for (let j=0; j < eleArr.length; j++) {
      if (pronouns[eleArr[j]]) {
        if (pageStats.pronouns[eleArr[j]]) pageStats.pronouns[eleArr[j]]++
        else pageStats.pronouns[eleArr[j]] = 1
        eleArr[j] = '<span class=\'coverted pronoun\'>' + pronouns[eleArr[j]] + '</span>'
      }
      if (nouns[eleArr[j]]) {
        if (pageStats.nouns[eleArr[j]]) pageStats.nouns[eleArr[j]]++
        else pageStats.nouns[eleArr[j]] = 1
        eleArr[j] = '<span class=\'coverted noun\'>' + nouns[eleArr[j]] + '</span>'
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
}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log('in listener', request)
  switch (request.message) {
    case 'convert':
      topBar.className = ''
      convert();
      sendResponse({pageStatus: 'converted'});
      break
    case 'revert':
      revertPage();
      topBar.className = 'hide'
      sendResponse({pageStatus: 'original'});
      break
    default:
      sendResponse({error: 'that input makes no sense'})
  }
})


