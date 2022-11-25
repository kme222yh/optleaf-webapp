import { Outlet, RouteObject, Navigate } from 'react-router-dom';
import { lazyImport } from '@/lib/lazyImport';

const { DashboardDefaultLayout } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardDefaultLayout'
);

// const { ProjectView } = lazyImport(
//     () => import('@/features/oldDashboard'),
//     'ProjectView'
// );
// const { ProjectTaskView } = lazyImport(
//     () => import('@/features/oldDashboard'),
//     'ProjectTaskView'
// );
const { DashboardTopView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardTopView'
);
// const { ProjectListView } = lazyImport(
//     () => import('@/features/oldDashboard'),
//     'ProjectListView'
// );
// const { TeamListView } = lazyImport(
//     () => import('@/features/oldDashboard'),
//     'TeamListView'
// );
// const { UserSettingView } = lazyImport(
//     () => import('@/features/oldDashboard'),
//     'UserSettingView'
// );

function App() {
    return (
        <DashboardDefaultLayout>
            <Outlet />
        </DashboardDefaultLayout>
    );
}

export const protectedRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <DashboardTopView /> },
            // { path: 'projects', element: <ProjectListView /> },
            // { path: 'teams', element: <TeamListView /> },
            // { path: 'project/:projectId', element: <ProjectView /> },
            // {
            //     path: 'project/:projectId/:taskId',
            //     element: <ProjectTaskView />
            // },
            // { path: 'user/setting', element: <UserSettingView /> },
            { path: '*', element: <Navigate to="." /> }
        ]
    }
];
