 function popup() {
    console.log('in popup')
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "convert"});
   });
}


document.getElementById("test-button").addEventListener("click", popup);


