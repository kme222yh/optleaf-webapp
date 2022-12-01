import React from 'react';
import { useRoutes, Route, Routes } from 'react-router-dom';

import { useAuth } from '@/providers/auth';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export function AppRoutes() {
    const user = useAuth();
    const routes = user.user ? protectedRoutes : publicRoutes;
    const element = useRoutes(routes);
    return element;
}

// for storybook
export function MemoryRoutes(children: React.ReactNode) {
    const $routes: React.ReactNode[] = [];
    if (protectedRoutes.length > 0 && protectedRoutes[0].children) {
        protectedRoutes[0].children.forEach((route) => {
            $routes.push(<Route key={route.path} path={route.path} element={children} />);
        });
    }
    return <Routes>{$routes}</Routes>;
}
