var currentTab

chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
  console.log(tab)
  currentTab = tab
});
