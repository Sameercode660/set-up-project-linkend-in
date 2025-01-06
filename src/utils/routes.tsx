import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import React from "react";
import App from "../App";
import Essentials from "../components/courses/Essentials";
import Tools from "../components/Tools";
import Signup from "../components/Signup";
import Assignments from "../components/Assignment";
import Notes from "../content/Notes";
import Mores from "../content/Mores";
import SupportUs from "../content/SupportUs";
import JoinUs from "../content/JoinUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/Essentials",
        element: <Essentials></Essentials>
    },
    {
        path: "/Tools",
        element: <Tools></Tools>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    }, 
    {
        path: "/Assignments",
        element: <Assignments></Assignments>
    },
    {
        path: "/Notes",
        element: <Notes></Notes>
    },
    {
        path: "/mores",
        element: <Mores></Mores>
    },
    {
        path: "/SupportUs",
        element: <SupportUs></SupportUs>
    }, 
    {
        path: "/JoinUs",
        element: <JoinUs></JoinUs>
    }
]);