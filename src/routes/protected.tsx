// import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// import { lazyImport } from '@/utils/lazyImport';
import { Sample } from '@/features/sample';

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '', element: <div>aaaa</div> },
      { path: 'sample', element: <Sample /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
]
