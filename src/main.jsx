import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Staticties from './Components/Staticties/Staticties';
import Applied from './Components/Applied/Applied';
import Errorpage from './Components/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errorpage></Errorpage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/staticties",
        element : <Staticties></Staticties>
      },
      {
        path : "/applied" ,
        element : <Applied></Applied>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
