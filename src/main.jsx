import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Compnents/Home/Home.jsx'
import About from './Compnents/About/About.jsx'
import Contact from './Compnents/Contact/Contact.jsx'
import Projects from './Compnents/Projects/Projects.jsx'
// import Skills from './Compnents/Skills/Skiils.jsx'
import Layout from './Layout.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
       
          <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='project' element={<Projects />}/>
        <Route path='*' element={<div>Not Found</div>} />
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)