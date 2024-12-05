import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AllVisa from "../components/AllVisa";
import AddVisa from "../components/AddVisa";
import MyAddedVisa from "../components/MyAddedVisa";
import VisaApplication from "../components/VisaApplication";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allVisa',
                element: <AllVisa></AllVisa>
            },
            {
                path: 'addVisa',
                element: <AddVisa></AddVisa>
            },
            {
                path: 'myAddedVisa',
                element: <MyAddedVisa></MyAddedVisa>
            },
            {
                path: 'visaApplication',
                element: <VisaApplication></VisaApplication>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;