const SET_DATA = 'SET_DATA'

//reducer
export default function reducer (state={}, action) {
  switch (action.type) {
    case SET_DATA:
      return action.data
    default:
      return state
  }
}

//action creators
export const setData = (data) => ({
  type: SET_DATA,
  data
})