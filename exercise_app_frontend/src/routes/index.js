import { RouterProvider, createBrowserRouter } from "react-router-dom"; // will be configuring and providing routing functionality.
import { useAuth } from "../provider/AuthProvider"; // allows for access to the authentication Context.
import { ProtectedRoute } from "./ProtectedRoute"; // allows us to use ProtectedRoutes as a wrapper for authenticated routes.
import Login from "../pages/Login";
import Logout from "../components/Logout"
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import UserProfile from "../pages/UserProfile";
import Layout from "../Layout/Layout.js"
import UserDashboardContainer from "../containers/UserDashboardContainer";
import Home from "../pages/Home";

// the files having js or jsx for the file extension doesn't really matter as they're interchangeable and vscode can read jsx in js files.

const Routes = () => {
    const { token } = useAuth();
    // Route configs below.

    // public routes for any user
    const routesForPublic = [
        {
            path: "/service",
            element: <div>Service Page</div>,
        },
        {
            path: "/about-us",
            element: <div>About us</div>,
        },
    ];

    // routes for authenticated only.
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <Layout/>,
                    children: [
                        {
                            path: "/",
                            element: <UserDashboardContainer/>,
                        },
                        {
                            path: "/profile/:userId",
                            element: <UserProfile/>,
                        },                     
                    ]
                },
            ],
        },
    ];

    // routes only accessible to non-authenticated users.
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        }

    ]

    const router = createBrowserRouter([ // the ...Spread operator is used to merge the routes all into one array for the createBrowserRoute configuration.
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []), // checks if the user is authenticated (token exists). If not, it includes the routesForNotAuthenticatedOnly array; otherwise, it includes an empty array.
        ...routesForAuthenticatedOnly,
    ])

    return <RouterProvider router={router} />;

};

export default Routes;

