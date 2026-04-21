import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";
import NewsContainer from "../NewsContainer/NewsContainer";
import Home from "../../Pages/Home/Home";

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
])

export default router;