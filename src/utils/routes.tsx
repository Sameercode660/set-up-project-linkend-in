import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import React from "react";
import App from "../App";
import Essentials from "../components/courses/Essentials";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/Essentials",
        element: <Essentials></Essentials>
    },
    
]);