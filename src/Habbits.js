import React, { useContext, useState } from 'react'
import { ReactReduxContext } from 'react-redux'
import { Link } from "react-router-dom";


const Habbits = () =>{
  const { store } = useContext(ReactReduxContext)
  const [newHabbit, setNewHabbit] = useState("")
  const [appState, setAppState] = useState(store.getState())

  const habbits = appState['habbits']
  
  const handleOnClick = (e)=> {
    if(newHabbit.length > 0)
      store.dispatch({ type: 'ADD_HABBIT', payload: newHabbit })
      setAppState(store.getState())
      setNewHabbit("")
  }


  return (
    <div>
      {habbits.map((habbit, index)=>(
        <div key={index}>
          <Link to={'/routine/'+habbit.id}>{habbit.text}</Link>
        </div>
      ))}
        <input type='text' onChange={(e)=>setNewHabbit(e.target.value)} value={newHabbit}/>
        <button onClick={handleOnClick}>Add +</button>
    </div>
  )
}

export default Habbits;

