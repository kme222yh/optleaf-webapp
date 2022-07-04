import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { Layout, ProjectView, Top } from '@/features/dashboard'

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
            { path: '', element: <Top /> },
            { path: 'project/:projectId', element: <ProjectView /> },
            { path: '*', element: <Navigate to="." /> },
        ],
    },
]
