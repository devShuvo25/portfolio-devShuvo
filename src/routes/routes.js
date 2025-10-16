import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";

 const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path:'/about-me',
                Component:About
            }
        ]
    }
])

export default router