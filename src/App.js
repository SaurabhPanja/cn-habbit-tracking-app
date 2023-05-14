import { createStore } from 'redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import Habbits from './Habbits';
import Routine from './Routine';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_HABBIT':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())

const router = createBrowserRouter([
  {
    path: "/",
    element: <Habbits />
  },
  {
    path: "/routine",
    element: <Routine />
  }
]);

function App() {
  return (
      <RouterProvider router={router} store={store}/>
  );
}

export default App;
