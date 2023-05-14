import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import Habbits from './Habbits';
import Routine from './Routine';

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
      <RouterProvider router={router} />
  );
}

export default App;
