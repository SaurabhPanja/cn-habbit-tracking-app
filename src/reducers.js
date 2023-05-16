const initialState = {
  habbits: [
    {
      id: 1,
      text: "Swimming",
      day_1: "none",
      day_2: "none",
      day_3: "none",
      day_4: "none",
      day_5: "none",
      day_6: "none",
      day_7: "none",
    },
    {
      id: 2,
      text: "Jogging",
      day_1: "none",
      day_2: "done",
      day_3: "none",
      day_4: "none",
      day_5: "none",
      day_6: "none",
      day_7: "none",
    },
    {
      id: 3,
      text: "Gymn",
      day_1: "none",
      day_2: "none",
      day_3: "none",
      day_4: "none",
      day_5: "none",
      day_6: "none",
      day_7: "none",
    },
  ],
};

function nextHabbitId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_HABBIT':
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `habbits` field
          habbits: [
            // with all of the old habbits
            ...state.habbits,
            // and the new todo object
            {
              // Use an auto-incrementing numeric ID
              id: nextHabbitId(state.habbits),
              text: action.payload,
                "day_1": "none",
                "day_2": "none",
                "day_3": "none",
                "day_4": "none",
                "day_5": "none",
                "day_6": "none",
                "day_7": "none"
            }
          ]
        }
        case 'UPDATE_ROUTINE':
          // console.log(action.payload)
          const {updateHabbitId, day, status } = action.payload

          const habbits = state.habbits.filter(habbit=>habbit.id != updateHabbitId)
          const toUpdateHabbit = state.habbits.find(habbit=>habbit.id == updateHabbitId)
          let updatedHabbit = {
            ...toUpdateHabbit
          }
          updatedHabbit[day] = status
          habbits.push(updatedHabbit)

          // console.log(habbits)

          return {
            // that has all the existing state data
            ...state,
            // but has a new array for the `habbits` field
            habbits: [...habbits]
          }        
      default:
        return state
    }
  }
  