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
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../components/VisaDetails";

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
                element: <AllVisa></AllVisa>,
                loader: () => fetch('https://assignment-10-server-orcin-three.vercel.app/visas')
            },
            {
                path: 'visa-details/:id',
                element: (
                    <PrivateRoute>
                        <VisaDetails></VisaDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://assignment-10-server-orcin-three.vercel.app/visas/${params.id}`)
            },
            {
                path: 'addVisa',
                element: (
                    <PrivateRoute>
                        <AddVisa></AddVisa>
                    </PrivateRoute>
                )
            },
            {
                path: 'myAddedVisa',
                element: (
                    <PrivateRoute>
                        <MyAddedVisa></MyAddedVisa>
                    </PrivateRoute>
                )
            },
            {
                path: 'visaApplication',
                element: (
                    <PrivateRoute>
                        <VisaApplication></VisaApplication>
                    </PrivateRoute>
                ),
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