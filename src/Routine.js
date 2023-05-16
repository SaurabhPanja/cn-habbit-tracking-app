import React, { useContext, useState } from 'react'
import { ReactReduxContext } from 'react-redux'
import { useParams, Link } from "react-router-dom";


const Routine = () =>{
  let { id } = useParams();
  const { store } = useContext(ReactReduxContext)
  const [appState, setAppState] = useState(store.getState())

  // console.log(appState)

  const habbits = appState['habbits']
  const filterHabbit = habbits.filter(habbit=>habbit.id == id)
  const routine = filterHabbit.length > 0 ? filterHabbit[0] : null
    
  const handleOnChange = (e)=> {
    const dayAndStatus = e.target.value.split(" ")

    const day = dayAndStatus[1]
    const updateStatus= dayAndStatus[0]

    // console.log(day)
    // console.log(updateStatus)

    store.dispatch({
      type: "UPDATE_ROUTINE",
      payload: {
        updateHabbitId: routine.id,
        day: day,
        status: updateStatus
      }
    })

    // console.log(store.getState())
  }

  const routinDays = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]


  return (
    <div>
      { routine && <div>
        <h1>{routine.text}</h1>
        {
          routinDays.map(day=>{
            let k = day.replace(" ", "_").toLowerCase()
            return (
              <div className='mb-2' key={k}>{day} : 
              <select className='form-select' defaultValue={routine[k] + " " + k} onChange={handleOnChange}>
                <option value={"done " + k}>Done</option>
                <option value={"none " + k}>None</option>
                <option value={"not_done " + k}>Not Done</option>
              </select>
              </div>
            )
          })
        }
        </div>}
        <Link to="/">Home</Link>
    </div>
  )
}

export default Routine;

