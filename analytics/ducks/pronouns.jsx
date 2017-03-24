const SET_ALL_PRONOUNS = 'SET_ALL_PRONOUNS';
const SET_NOM_PRONOUNS = 'SET_NOM_PRONOUNS';
const SET_REF_PRONOUNS = 'SET_REF_PRONOUNS';

//reducer
export default function reducer (state = {}, action) {
  switch (action.type) {
    case SET_ALL_PRONOUNS:
      return Object.assign({}, state, {all: action.data})
    case SET_NOM_PRONOUNS:
      return Object.assign({}, state, {nom: action.data})
    case SET_REF_PRONOUNS:
      return Object.assign({}, state, {ref: action.data})
    default:
      return state
  }
}

//action creators
export const setAllPronouns = (data) => ({
  type: SET_ALL_PRONOUNS,
  data
})

export const setNomPronouns = (data) => ({
  type: SET_NOM_PRONOUNS,
  data
})

export const setRefPronouns = (data) => ({
  type: SET_REF_PRONOUNS,
  data
})