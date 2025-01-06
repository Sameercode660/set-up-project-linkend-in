// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { router } from "./utils/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <div >
  //   <App />
  //   </div>
  // </BrowserRouter>

  <RouterProvider router={router} />
);

//className="dark:bg-slate-900 dark:text-white"