import { createStore, applyMiddleware } from 'redux'
import rootReducer from './ducks'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     if (request.action === 'dispatch') {
         store.dispatch(request.arg);
         sendResponse('success');
     }
});
