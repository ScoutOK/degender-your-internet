let pageData = {
  pronouns: {},
  nouns: {},
  adjectives: {}
}



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.message == "analyze"){
      let tabIdx
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        console.log('current tab index', tabs[0].index)
        tabIdx = tabs[0].index + 1;
      });
      console.log('the analysis tab id', tabIdx);
      sendResponse({farewell: "we made it this far"});
      const analyticsURL = chrome.extension.getURL('analytics.html');
      chrome.tabs.create({
        url: analyticsURL,
        index: tabIdx
      }, function(){
        console.log('well i tried');
      })
    }

      
  });