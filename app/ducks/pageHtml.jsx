import Promise from 'bluebird'

//actions
const GET_HTML = 'GET_HTML'

//reducer
export default function reducer (state = "", action) {
  switch (action.type) {
    case GET_HTML:
      return action.html || 'gurl, something went wrong'
    default:
      return state
  }
}

//sync action creators
export const getHTML = html => ({
  type: GET_HTML,
  html
})

//async action creators (ish, more just interact with the page DOM action creators)
export const fetchHTML = () => {
  return function (dispatch) {
    let tabOb
    return promTab
    .then((tab) => {
      tabOb = tab[0]
      console.log('this is tab variable', tabOb)
      const action = getHTML(tabOb);
      return dispatch(action)
    })
  }
}

const promTab = new Promise((resolve, reject)=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    console.log(tab)
    resolve(tab);
  });

})
