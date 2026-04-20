import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/about",
        Component: About
    },
    {
        path: "/career",
        element: Career
    },
])

export default router;