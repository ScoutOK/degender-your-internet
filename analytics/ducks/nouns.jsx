const SET_ALL_NOUNS = 'SET_ALL_NOUNS';

const zeros = {
  total: 0,
  fem: 0,
  masc: 0,
}

const initialState = {
  all: zeros,
}

//reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_NOUNS:
      return Object.assign({}, state, {all: action.data})
    default:
      return state
  }
}

//action creators
export const setAllNouns = (data) => ({
  type: SET_ALL_NOUNS,
  data
})