import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { Top, Layout } from '@/features/guest'
import { Login, Register } from '@/features/auth'

function App() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Top /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: '*', element: <Navigate to="." /> },
        ],
    },
]
