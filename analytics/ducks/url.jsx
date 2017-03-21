const SET_URL = 'SET_URL'

//reducer
export default function reducer (state='', action) {
  switch (action.type) {
    case SET_URL:
      return action.url
    default:
      return state
  }
}

//action creators
export const setUrl = (url) => ({
  type: SET_URL,
  url
})