const SET_ALL_ADJECTIVES = 'SET_ALL_ADJECTIVES';


const initialState = {}

//reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_ADJECTIVES:
      return action.data
    default:
      return state
  }
}

//action creators
export const setAllAdjectives = (data) => ({
  type: SET_ALL_ADJECTIVES,
  data
})