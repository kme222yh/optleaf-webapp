import { Outlet, RouteObject, Navigate } from 'react-router-dom';
import { lazyImport } from '@/lib/lazyImport';

const { DashboardDefaultLayout } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardDefaultLayout'
);
const { DashboardSettingLayout } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardSettingLayout'
);
const { DashboardDetailLayout } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardDetailLayout'
);

const { DashboardTopView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardTopView'
);
const { DashboardProjectsView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardProjectsView'
);
const { DashboardProjectView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardProjectView'
);
const { DashboardTaskView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardTaskView'
);
const { DashboardTeamsView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardTeamsView'
);
const { DashboardTeamView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardTeamView'
);

const { DashboardSettingProfileView } = lazyImport(
    () => import('@/features/dashboard/features/setting'),
    'DashboardSettingProfileView'
);
const { DashboardSettingEditProfileView } = lazyImport(
    () => import('@/features/dashboard/features/setting'),
    'DashboardSettingEditProfileView'
);

function App() {
    return <Outlet />;
}

export const protectedRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardTopView />
                    </DashboardDefaultLayout>
                )
            },
            {
                path: '/projects',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardProjectsView />
                    </DashboardDefaultLayout>
                )
            },
            {
                path: '/project/:id',
                element: (
                    <DashboardDetailLayout>
                        <DashboardProjectView />
                    </DashboardDetailLayout>
                )
            },
            {
                path: '/project/:id/:taskId',
                element: (
                    <DashboardDetailLayout>
                        <DashboardTaskView />
                    </DashboardDetailLayout>
                )
            },
            {
                path: '/teams',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardTeamsView />
                    </DashboardDefaultLayout>
                )
            },
            {
                path: '/team/:teamId',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardTeamView />
                    </DashboardDefaultLayout>
                )
            },
            // {
            //     path: '/setting',
            //     element: (
            //         <DashboardSettingLayout>
            //             <DashboardSettingProfileView />
            //         </DashboardSettingLayout>
            //     )
            // },
            {
                path: '/profile',
                element: (
                    <DashboardSettingLayout>
                        <DashboardSettingProfileView />
                    </DashboardSettingLayout>
                )
            },
            {
                path: '/profile/edit',
                element: (
                    <DashboardSettingLayout>
                        <DashboardSettingEditProfileView />
                    </DashboardSettingLayout>
                )
            },
            { path: '*', element: <Navigate to="." /> }
        ]
    }
];
