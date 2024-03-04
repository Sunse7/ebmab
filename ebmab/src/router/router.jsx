import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '../pages/landing/LandingPage';
import { ProjectPage } from '../pages/project/ProjectPage';
import { EditProjectPage } from '../pages/editProject/EditProjectPage';
import { AboutPage } from '../pages/about/AboutPage';
import { ContactPage } from '../pages/contact/ContactPage';
import { LoginPage } from '../pages/login/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/projekt',
        element: <ProjectPage />
    },
    {
        path: '/projekt/redigera',
        element: <EditProjectPage />
    },
    {
        path: '/om-oss',
        element: <AboutPage />
    },
    {
        path: '/kontakt',
        element: <ContactPage />
    },
    {
        path: '/logga-in',
        element: <LoginPage />
    },
    {
        path: '*',
        element: <h3>Sidan hittades inte</h3>
    }
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />
}