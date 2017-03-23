const CHANGE_VIEW = 'CHANGE_VIEW'

//reducer
export default function reducer (state='pronouns', action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.pos
    default:
      return state
  }
}

//action creators
export const changeView = (pos) => ({
  type: CHANGE_VIEW,
  pos
})