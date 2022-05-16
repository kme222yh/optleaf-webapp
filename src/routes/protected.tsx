// import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppLayout } from '@/components/Layout'

// import { lazyImport } from '@/utils/lazyImport';
import { Sample } from '@/features/sample'

function App() {
    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    )
}

export const protectedRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <div>aaaa</div> },
            { path: 'sample', element: <Sample /> },
            { path: '*', element: <Navigate to="." /> },
        ],
    },
]
