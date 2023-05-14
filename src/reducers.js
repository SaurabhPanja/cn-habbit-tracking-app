const initialState = {
  habbits: [
    { id: 0, text: 'Swimming', status: "none" },
    { id: 1, text: 'Jogging', status: "not-done"},
    { id: 2, text: 'Gymn', status: "done"}
  ]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_HABBIT':
        return {...state, }
      default:
        return state
    }
  }
  