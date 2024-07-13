import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home, About, Github} from "./Components";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { githubInfoLoader } from './Components/Github.jsx';

// Alternative to <BrowserRouter></BrowserRouter> we used RouterProvider and createBrowserRouter method bcoz loader attribute works in only this method

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/github' element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
