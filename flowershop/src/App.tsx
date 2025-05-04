import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
