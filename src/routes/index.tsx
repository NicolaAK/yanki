import React from 'react';
import { useRoutes } from 'react-router';
import Main from '@components/Main';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './constants';

const generateGithubPagesRoutes = (route: string) => `${ROUTES.YANKI}/${route}`;

const Routes = () =>
    useRoutes([
        {
            path: generateGithubPagesRoutes(''),
            element: <Main />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.CATALOG),
            element: <div>Catalog</div>,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.CATEGORY),
            children: [
                {
                    path: ':idCategory',
                    element: <div>Category</div>,
                },
            ],
        },
        { path: '*', element: <Navigate to={generateGithubPagesRoutes('')} replace /> },
    ]);

export default Routes;
