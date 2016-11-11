var msg = { action: 'dispatch', arg: { type: 'INCREMENT' }};
chrome.runtime.sendMessage(msg, function(response) {
    console.log(response) // 'success'
});
