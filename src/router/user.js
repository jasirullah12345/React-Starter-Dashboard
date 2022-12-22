import UserList from "../views/user/user-list";
import NewUser from "../views/user/new-user";
import UserDetail from "../views/user/user-detail";

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