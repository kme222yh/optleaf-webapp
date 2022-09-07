import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { DashboardLayout, ProjectView, ProjectTaskView, Top, ProjectListView, TeamListView } from '@/features/dashboard'

function App() {
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )
}

export const protectedRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Top /> },
            { path: 'projects', element: <ProjectListView /> },
            { path: 'teams', element: <TeamListView /> },
            { path: 'project/:projectId', element: <ProjectView /> },
            { path: 'project/:projectId/:taskId', element: <ProjectTaskView /> },
            { path: '*', element: <Navigate to="." /> },
        ],
    },
]
