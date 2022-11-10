import { Outlet, RouteObject } from 'react-router-dom';

// import { Top, Layout } from '@/features/guest';
// import { Login, Register } from '@/features/auth';
import { RoundedLink } from '@/features/guest';

function App() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <RoundedLink href="/" text="hoge" />
            }
            // { path: '', element: <Top /> },
            // { path: 'login', element: <Login /> },
            // { path: 'register', element: <Register /> },
            // { path: '*', element: <Navigate to="." /> }
        ]
    }
];
