chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.message == "analyze"){
      sendResponse({farewell: "we made it this far"});
      chrome.tabs.create(string 'http://www.google.com', function(){
        console.log('well i tried')
      })
    }

      
  });