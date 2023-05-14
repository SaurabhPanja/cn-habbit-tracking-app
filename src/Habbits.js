import React, { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

export default function Habbits() {
  const { store } = useContext(ReactReduxContext)

  console.log(store.getState())
  return (
    <div>
        <div>
            <a href="/routine">Habbit 1</a>
        </div>
        <div>
            Habbit 2
        </div>
        <div>
            Habbit 3
        </div>
        <button>Add +</button>
    </div>
  )
}
