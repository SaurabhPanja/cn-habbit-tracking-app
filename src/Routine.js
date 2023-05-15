import React, { useContext, useState } from 'react'
import { ReactReduxContext } from 'react-redux'
import { useParams } from "react-router-dom";


const Routine = () =>{
  let { id } = useParams();
  const { store } = useContext(ReactReduxContext)
  const [appState, setAppState] = useState(store.getState())

  console.log(appState)

  const habbits = appState['habbits']
  const filterHabbit = habbits.filter(habbit=>habbit.id == id)
  const routine = filterHabbit.length > 0 ? filterHabbit[0] : null
  
  // const handleOnClick = (e)=> {
  //   if(newHabbit.length > 0)
  //     store.dispatch({ type: 'ADD_HABBIT', payload: newHabbit })
  //     setAppState(store.getState())
  //     setNewHabbit("")
  // }

  const routinDays = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]


  return (
    <div>
      { routine && <div>
        <h1>{routine.text}</h1>
        {
          routinDays.map(day=>{
            let k = day.replace(" ", "_").toLowerCase()
            return (
              <div key={k}>{day} : 
              <select defaultValue={routine.status[k]} onChange={(e)=>console.log(e.target.value)}>
                <option value="done">Done</option>
                <option value="none">None</option>
                <option value="not_done">Not Done</option>
              </select>
              </div>
            )
          })
        }
        </div>}
    </div>
  )
}

export default Routine;

