// const Promise = require('bluebird');

let pageData = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}

// const syncTabQuery = Promise.promisify(chrome.tabs.query())
const tabProm = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      if (Array.isArray(tabs)) {
        resolve(tabs);
      } else {
        reject('not in a tab')
      }
    });
  })
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.message == "analyze"){
      let tabIdx
    
      tabProm()
        .then((tabs)=>{
          tabIdx = tabs[0].index + 1;
          chrome.tabs.create({
            url: analyticsURL,
            index: tabIdx
          }, function(){
            console.log('well i tried');
          })
        })
        .catch(console.error);

      console.log(request.data);

      sendResponse({farewell: "we made it this far"});
      const analyticsURL = chrome.extension.getURL('analytics.html');
      
    }

      
  });