import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";
import NewsContainer from "../NewsContainer/NewsContainer";
import Home from "../../Pages/Home/Home";
import LogIn from "../Categories/LogIn/LogIn";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/news/:id",
                Component: NewsContainer,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: "/about",
        Component: About
    },
    {
        path: "/career",
        Component: Career
    },
    {
        path: "/login",
        Component: LogIn
    },
    {
        path: "/register",
        Component: Register
    },
])

export default router;