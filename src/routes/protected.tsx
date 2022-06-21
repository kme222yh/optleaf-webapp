import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { Layout } from '@/features/dashboard'

function App() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export const protectedRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <div>ダッシュボードやで！！</div> },
            { path: '*', element: <Navigate to="." /> },
        ],
    },
]
