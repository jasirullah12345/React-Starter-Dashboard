import SignIn from "../views/auth/sign-in";
import SignUp from "../views/auth/sign-up";
import UnProtectedLayout from "../layouts/UnProtectedLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Profile from "../views/auth/profile";
import Password from "../views/auth/password";
import SignOut from "../views/auth/sign-out";

export const authRoutes = [
    {
        element: <UnProtectedLayout/>,
        children: [
            {
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
    {
        element: <ProtectedLayout/>,
        children: [
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/password',
                element: <Password/>
            },
            {
                path: '/signout',
                element: <SignOut/>
            }
        ]
    }
];