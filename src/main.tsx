import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Projects from './components/Projects'
import ProjectPage from './pages/ProjectPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    children: [
      {
        path: "",
        element: <Projects/>
      },
      {
        path: ":id",
        element: <ProjectPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
