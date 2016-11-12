
//function to get the HTML of a given ta
function getHTML(){
    return document.body.outerHTML
}

console.log('the degender content script is totes')

//document.getElementById('gc-footer').style.backgroundColor = 'red'

//let pageBody = document.body

//using createTreeWalker to get all the text from the page
//let textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

const findAndReplacePronoun = (pronoun, replacement, string) => {
  const proLeng = pronoun.length;
  for (let i = 0; i < string.length - proLeng + 1; i++) {
    if (string.substr(i, proLeng).toLowerCase() == pronoun) {
      //test to see if can reasonable assume that this is indeed the pronoun
      if (!/([a-zA-Z])/.test(string[i - 1]) && !/([a-zA-Z])/.test(string[i + proLeng])) {
        string = string.substring(0, i) + replacement + string.substring(i+proLeng);
      }
    }
  }
  return string
}


function getTextNodes(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

let allTextNodes = getTextNodes(document.body);
console.log(allTextNodes)

let goodTextStrings = allTextNodes.filter((ele)=>{
  return /[a-z]/.test(ele.data.toLowerCase())
})

const originalText = goodTextStrings;

//now that have strings, gonna try the most basic cases
const convertPage = () => {
  for (let i = 0; i < goodTextStrings.length; i++) {
    goodTextStrings[i].data = findAndReplacePronoun('she', 'they', goodTextStrings[i].data);
    goodTextStrings[i].data = findAndReplacePronoun('her', 'their', goodTextStrings[i].data);
    goodTextStrings[i].data = findAndReplacePronoun('hers', 'theirs', goodTextStrings[i].data);
    goodTextStrings[i].data = findAndReplacePronoun('he', 'they', goodTextStrings[i].data);
    goodTextStrings[i].data = findAndReplacePronoun('his', 'their', goodTextStrings[i].data);
    goodTextStrings[i].data = findAndReplacePronoun('him', 'them', goodTextStrings[i].data);
  }
}

console.log(goodTextStrings)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log('in listener', request)
  switch (request.message) {
    case 'convert':
      convertPage();
      sendResponse({pageStatus: 'converted'});
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
