import {createBrowserRouter} from "react-router-dom";
import UnProtectedLayout from "../layouts/UnProtectedLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import NotFound from "../components/common/NotFound";
import {usersRoutes} from "./user";
import {authRoutes} from "./auth";
import Index from "../views";


export const router = createBrowserRouter([
    {
        element: <ProtectedLayout/>,
        children: [
            {
                path: "/",
                element: <Index/>,
            },
            ...usersRoutes,
        ]
    },
    ...authRoutes,
    {
        path: '*',
        element: <NotFound/>
    }
]);