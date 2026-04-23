import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";
import NewsContainer from "../NewsContainer/NewsContainer";
import LogIn from "../Categories/LogIn/LogIn";
import Register from "../Register/Register";
import NewsDetails from "../../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/news/:id",
                Component: NewsContainer,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <span className="loading loading-spinner loading-lg"></span>
            }
        ]
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/career",
        Component: Career
    },
    {
        path: "/newsdetails/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
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