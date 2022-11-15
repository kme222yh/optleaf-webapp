import { Outlet, RouteObject, Navigate } from 'react-router-dom';
import { lazyImport } from '@/lib/lazyImport';

const { DashboardLayout } = lazyImport(
    () => import('@/features/oldDashboard'),
    'DashboardLayout'
);
const { ProjectView } = lazyImport(
    () => import('@/features/oldDashboard'),
    'ProjectView'
);
const { ProjectTaskView } = lazyImport(
    () => import('@/features/oldDashboard'),
    'ProjectTaskView'
);
const { Top } = lazyImport(() => import('@/features/oldDashboard'), 'Top');
const { ProjectListView } = lazyImport(
    () => import('@/features/oldDashboard'),
    'ProjectListView'
);
const { TeamListView } = lazyImport(
    () => import('@/features/oldDashboard'),
    'TeamListView'
);
const { UserSettingView } = lazyImport(
    () => import('@/features/oldDashboard'),
    'UserSettingView'
);

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
