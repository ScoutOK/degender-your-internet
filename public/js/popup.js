// var currentTab

// chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
//   console.log(tab)
//   currentTab = tab
// });

var backport = chrome.extension.connect({
    name: "Sample Communication"
});
backport.postMessage("Hi BackGround");
backport.onMessage.addListener(function(msg) {
    console.log("message recieved" + msg);
});
