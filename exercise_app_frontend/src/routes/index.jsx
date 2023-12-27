import { RouterProvider, createBrowserRouter } from "react-router-dom"; // will be configuring and providing routing functionality.
import { useAuth } from "../Provider/AuthProvider"; // allows for access to the authentication Context.
import { ProtectedRoute } from "./ProtectedRoute"; // allows us to use ProtectedRoutes as a wrapper for authenticated routes.
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import UserHomePage from "../Pages/UserHomePage";

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
                    element: <UserHomePage/>,
                },
                {
                    path: "/profile",
                    element: <div>User Profile</div>,
                },
                {
                    path: "/logout",
                    element: <Logout/>
                }
            ],
        },
    ];

    // routes only accessible to non-authenticated users.
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <div>Home Page</div>,
        },
        {
            path: "/login",
            element: <Login/>
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

