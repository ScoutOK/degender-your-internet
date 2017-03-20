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
      sendResponse({farewell: "we made it this far"});
      const analyticsURL = chrome.extension.getURL('analytics.html');
      chrome.tabs.create({url: analyticsURL}, function(){
        console.log('well i tried');
      })
    }

      
  });