import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AddChocolate from './components/AddChocolate/AddChocolate.jsx';
import UpdateChocolate from './components/UpdateChocolate/UpdateChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addChocolate",
        element:<AddChocolate></AddChocolate>
      },
      {
        path:"/updateChocolate",
        element:<UpdateChocolate></UpdateChocolate>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
