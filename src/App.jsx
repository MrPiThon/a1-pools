import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import OurCustomersPage from './pages/OurCustomersPage.jsx';
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";

import './stylesheets/App.css';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/our-customers" element={<OurCustomersPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;