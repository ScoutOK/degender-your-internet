const SET_ALL_PRONOUNS = 'SET_ALL_PRONOUNS';
const SET_NOM_PRONOUNS = 'SET_NOM_PRONOUNS';
const SET_REF_PRONOUNS = 'SET_REF_PRONOUNS';

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