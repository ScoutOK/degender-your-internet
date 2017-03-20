// const Promise = require('bluebird');

let pageData = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}

// make the tab query into a promise to chain off of
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
    switch (request.message) {
    case 'analyze':
      //save the message data
      pageData = request.data;
      let tabIdx
      //find the url for the analytics page
      const analyticsURL = chrome.extension.getURL('analytics.html');
      //use query data to create a new tab next to the current one
      tabProm()
        .then((tabs)=>{
          tabIdx = tabs[0].index + 1;
          chrome.tabs.create({
            url: analyticsURL,
            index: tabIdx
          })
        })
        .catch(console.error);

      
    case 'pageReady':
      sendResponse(pageData)
    default:
      sendResponse({error: '???????'})
  }
    if (request.message == "analyze"){
      
      
    }

      
  });