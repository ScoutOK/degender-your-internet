 function popup() {
    console.log('in popup')
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "convert"});
   });
}

 function revert() {
    console.log('in popup')
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "revert"});
   });
}


//document.getElementById("degender-button").addEventListener("click", popup);
//document.getElementById("revert").addEventListener("click", revert);


