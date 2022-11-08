import { Outlet, RouteObject } from 'react-router-dom';

// import { DashboardLayout, ProjectView, ProjectTaskView, Top, ProjectListView, TeamListView, UserSettingView } from '@/features/dashboard'

function App() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export const protectedRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <p>ほげ</p> }
            // { path: '', element: <Top /> },
            // { path: 'projects', element: <ProjectListView /> },
            // { path: 'teams', element: <TeamListView /> },
            // { path: 'project/:projectId', element: <ProjectView /> },
            // { path: 'project/:projectId/:taskId', element: <ProjectTaskView /> },
            // { path: 'user/setting', element: <UserSettingView /> },
            // { path: '*', element: <Navigate to="." /> },
        ]
    }
];
