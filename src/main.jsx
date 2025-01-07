import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import User,{userLoader} from './components/pages/User.jsx';
import UserDetail,{userDetailLoader} from './components/pages/UserDetail.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';



const router=createBrowserRouter([
  {path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/about", element:<About/>},
      {path:"/user", element:<User/>, loader: userLoader},
      {path:"/user/:id", element:<UserDetail/>, loader: userDetailLoader},
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
