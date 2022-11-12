import { Outlet, RouteObject } from 'react-router-dom';

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
            { path: '', element: <div><p>ログインでけた！</p></div> }
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
