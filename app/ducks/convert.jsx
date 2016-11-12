const CONVERT_PAGE ='CONVERT_PAGE'

//reducer
export default function reducer (state = '', action) {
  switch (action.type) {
    case CONVERT_PAGE:
      return action.page_state || 'gurl, something went wrong'
    default:
      return state
  }
}

//sync action creators
export const convertPage = page_state => ({
  type: CONVERT_PAGE,
  page_state
})


//async action creators (ish, more just interact with the page DOM action creators)
export const sendToPage = () => {
  return function (dispatch) {
    return promTab
    .then((tab) => {
      console.log('this is tab variable', tab.id)
      chrome.tabs.sendRequest(tab.id, {"message": "convert"});
    })
  }
}

const promTab = new Promise((resolve, reject)=>{
  chrome.tabs.getSelected(null, function(tab) {
    resolve(tab);
  });
})
//seems like there might be an issue sending these from the redux files???

