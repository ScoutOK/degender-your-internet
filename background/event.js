const Promise = require('bluebird');

let pageData = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}

const syncTabQuery = Promise.promisify(chrome.tabs.query)

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.message == "analyze"){
      let tabIdx
      syncTabQuery({currentWindow: true, active: true})
        .then((tabs)=>{
          tabIdx = tabs[0].index + 1;
          chrome.tabs.create({
            url: analyticsURL,
            index: tabIdx
          }, function(){
            console.log('well i tried');
          })
        });
      // chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      //   console.log('current tab index', tabs[0].index)
      //   tabIdx = tabs[0].index + 1;
      // });
      //console.log('the analysis tab id', tabIdx);
      sendResponse({farewell: "we made it this far"});
      const analyticsURL = chrome.extension.getURL('analytics.html');
      
    }

      
  });