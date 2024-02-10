import {BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import {action as SignUpAction} from './pages/SignUpPage'
import {action as SignInAction} from './pages/SignInPage'
import {loader as DashboardLoader} from './pages/DashboardPage'
import SendMoney from './pages/SendMoney';
import './App.css'

const router= createBrowserRouter([
  {
    path:'/',
    element:<SignInPage/>,
    action:SignInAction,
    
  },{
    path:'/signup',
    element:<SignUpPage/>,
    action:SignUpAction,
  },{
    path:'/dashboard',
    element:<DashboardPage/>,
    loader:DashboardLoader,
  },{
    path:'/send',
    element:<SendMoney/>
  }
]);

function App() {

  return (
      
      <RouterProvider router={router}/>
     

     
   
  )
}

export default App
