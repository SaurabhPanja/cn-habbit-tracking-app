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
      <h1>Habbits</h1>
      {habbits.map((habbit, index)=>(
        <Link 
        className='btn btn-info d-block mb-2' 
        key={index} 
        to={'/routine/'+habbit.id}
        >
          {habbit.text}
        </Link>
      ))}
        <input className='form-control mb-2' type='text' onChange={(e)=>setNewHabbit(e.target.value)} value={newHabbit}/>
        <button className='btn btn-success' onClick={handleOnClick}>Add +</button>
    </div>
  )
}

export default Habbits;

