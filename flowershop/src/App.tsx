import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { ToastContainer, toast } from 'react-toastify';

const confirmToast = () => {
  toast.success("Wow ti afanasik!")
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/login',
    element: <Login confirmToast={confirmToast}  />
  },
  {
    path: '/register',
    element: <Register confirmToast={confirmToast}/>
  }
])

function App() {

  return (
    <> 
      <RouterProvider router={router}/>
      <ToastContainer />
    </>
  )
}

export default App
