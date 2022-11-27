import { Outlet, RouteObject, Navigate } from 'react-router-dom';
import { lazyImport } from '@/lib/lazyImport';

const { DashboardDefaultLayout } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardDefaultLayout'
);

const { DashboardTopView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardTopView'
);
const { DashboardProjectsView } = lazyImport(
    () => import('@/features/dashboard'),
    'DashboardProjectsView'
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
                path: '/teams',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardTopView />
                    </DashboardDefaultLayout>
                )
            },
            {
                path: '/setting',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardTopView />
                    </DashboardDefaultLayout>
                )
            },
            {
                path: '/profile',
                element: (
                    <DashboardDefaultLayout>
                        <DashboardTopView />
                    </DashboardDefaultLayout>
                )
            },
            { path: '*', element: <Navigate to="." /> }
        ]
    }
];
