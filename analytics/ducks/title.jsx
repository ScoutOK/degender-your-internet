//actions
const SET_TITLE = 'SET_TITLE'

//reducer
export default function reducer (state='', action) {
  switch (action.type) {
    case SET_TITLE:
      return action.title
    default:
      return state
  }
}

//action creators
export const setTitle = (title) => ({
  type: SET_TITLE,
  title
})