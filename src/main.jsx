import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import OrderReview from './components/OrderRiview/OrderReview';
import Main from './components/Layout/Main';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('shirts.json')
      },
      {
        path:'order',
        element:<OrderReview></OrderReview>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
