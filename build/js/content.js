

console.log('the degender content script is totes active')


//build a div to go at the top of the page
let topBar = document.createElement("div");

topBar.setAttribute('id', 'degender-bar')

topBar.innerHTML = '<h1>This page has been degendered</h1><button id=\'revert\'>Revert</button><button id=\'highPronouns\'>Highlight Altered Pronouns</button><button id=\'highAdj\'>Highlight Altered Adjectives</button><button id=\'highAll\'>Highlight All Altered Text</button>'


//object to contain info about oage for analytics
let pageStats = {
  pronouns: {},
  adjectives: {}
}


const findAndReplacePronoun = (pronoun, replacement, string) => {
  const proLeng = pronoun.length;
  let replaceSpan = document.createElement('span');
  replaceSpan.setAttribute('class', 'converted');
  for (let i = 0; i < string.length - proLeng + 1; i++) {
    if (string.substr(i, proLeng).toLowerCase() == pronoun) {
      //test to see if can reasonable assume that this is indeed the pronoun
      if (!/([a-zA-Z])/.test(string[i - 1]) && !/([a-zA-Z])/.test(string[i + proLeng])) {
        if(pageStats.pronouns[pronoun]) pageStats.pronouns[pronoun]++
        else pageStats.pronouns[pronoun] = 1
        string = string.substring(0, i) + '<span class=\'coverted pronoun\'>' + replacement + '</span>' + string.substring(i+proLeng);
      }
    }
  }
  return string
}


//in order to add tags around the changes, need to access the text in a different way :(
let allElements = document.body.getElementsByTagName("*");
console.log(allElements)

//would still be nice to not have to go over elements with no innerHTML

//UGH, forgot that this is technically not an array
// let goodElements = allElements.filter((ele)=>{
//   return /[a-z]/.test(ele.innerHTML.toLowerCase())
// })



const convertPronoun = () => {
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].innerHTML = findAndReplacePronoun('she', 'they', allElements[i].innerHTML);
    allElements[i].innerHTML = findAndReplacePronoun('her', 'their', allElements[i].innerHTML);
    allElements[i].innerHTML = findAndReplacePronoun('hers', 'theirs', allElements[i].innerHTML);
    allElements[i].innerHTML = findAndReplacePronoun('he', 'they', allElements[i].innerHTML);
    allElements[i].innerHTML = findAndReplacePronoun('his', 'their', allElements[i].innerHTML);
    allElements[i].innerHTML = findAndReplacePronoun('him', 'them', allElements[i].innerHTML);
  }
  document.body.insertBefore(topBar, document.body.firstChild)
  console.log(pageStats)
}

const revertPage = () => {
  goodTextStrings = originalText
}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log('in listener', request)
  switch (request.message) {
    case 'convert':
      convertPronoun();
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


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "start" ) {
//      console.log('it finally worked');
//          }
//   }
// );
