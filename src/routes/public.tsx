import { Outlet, RouteObject, Navigate } from 'react-router-dom';

import {
    GuestLoginView,
    GuestIndexView,
    GuestDefaultLayout,
    GuestFogotPasswordView
} from '@/features/guest';

function App() {
    return (
        <GuestDefaultLayout>
            <Outlet />
        </GuestDefaultLayout>
    );
}

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <GuestIndexView /> },
            { path: 'login', element: <GuestLoginView /> },
            { path: 'fogot_password', element: <GuestFogotPasswordView /> },
            { path: '*', element: <Navigate to="." /> }
        ]
    }
];
