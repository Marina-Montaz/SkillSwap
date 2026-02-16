import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import SkillDetails from "../pages/SkillDetails";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { 
                path: "/skill/:id", 
                element: <PrivateRoute><SkillDetails /></PrivateRoute>,
                loader: () => fetch("/skills.json") // Loads your 6+ skills data [cite: 35]
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/forgot-password", element: <ForgotPassword /> },
            { 
                path: "/my-profile", 
                element: <PrivateRoute><MyProfile /></PrivateRoute> 
            },
        ],
    },
]);

export default router;