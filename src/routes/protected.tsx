import { Outlet, RouteObject, Navigate } from 'react-router-dom';

import {
    DashboardLayout,
    ProjectView,
    ProjectTaskView,
    Top,
    ProjectListView,
    TeamListView,
    UserSettingView
} from '@/features/oldDashboard';

function App() {
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    );
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
            {
                path: 'project/:projectId/:taskId',
                element: <ProjectTaskView />
            },
            { path: 'user/setting', element: <UserSettingView /> },
            { path: '*', element: <Navigate to="." /> }
        ]
    }
];
