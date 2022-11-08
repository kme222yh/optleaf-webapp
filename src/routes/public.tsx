import { Outlet, RouteObject } from 'react-router-dom';

// import { Top, Layout } from '@/features/guest';
// import { Login, Register } from '@/features/auth';

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
            { path: '', element: <p>Hello World</p> }
            // { path: '', element: <Top /> },
            // { path: 'login', element: <Login /> },
            // { path: 'register', element: <Register /> },
            // { path: '*', element: <Navigate to="." /> }
        ]
    }
];
