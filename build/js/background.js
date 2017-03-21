webpackJsonp([1,4],[
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	// const Promise = require('bluebird');
	
	var pageData = {
	  pronouns: {},
	  nouns: {},
	  adjectives: {}
	};
	
	// make the tab query into a promise to chain off of
	var tabProm = function tabProm() {
	  return new Promise(function (resolve, reject) {
	    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	      if (Array.isArray(tabs)) {
	        resolve(tabs);
	      } else {
	        reject('not in a tab');
	      }
	    });
	  });
	};
	
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	  switch (request.message) {
	    case 'analyze':
	      //save the message data
	      pageData = request.pageData;
	      var tabIdx = void 0;
	      //find the url for the analytics page
	      var analyticsURL = chrome.extension.getURL('analytics.html');
	      //use query data to create a new tab next to the current one
	      tabProm().then(function (tabs) {
	        tabIdx = tabs[0].index + 1;
	        chrome.tabs.create({
	          url: analyticsURL,
	          index: tabIdx
	        });
	      }).catch(console.error);
	
	    case 'pageReady':
	      sendResponse(pageData);
	    default:
	      sendResponse({ error: '???????' });
	  }
	});

/***/ }
]);
//# sourceMappingURL=background.js.map