// import { Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { Layout } from '@/features/guest'

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
