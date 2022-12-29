import {lazy} from "react";
import Loadable from "components/Loadable";

// Users Routes
const NewUser = Loadable(lazy(() => import('pages/users/new-user')));
const UserDetail = Loadable(lazy(() => import('pages/users/user-detail')));
const UserList = Loadable(lazy(() => import('pages/users/user-list')));

export const usersRoutes = [
    {
        path: '/users',
        children: [
            {
                index: true,
                element: <UserList/>
            },
            {
                path: 'new',
                element: <NewUser/>
            },
            {
                path: ':id',
                element: <UserDetail/>
            }
        ]
    }
];