import React from 'react';
import NotFound from './components/layouts/not_found';
import NavBar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Home from './components/landing/home';
import About from './components/about/about';
import Stories from './components/about/stories';
import Activities from './components/activities/activities';
import Contact from './components/contact/contact_us';
import Admin from './components/admin/admin';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => <Home />,
    "/about-us": () => <About />,
    "/about-us/our-stories*": () => <Stories />,
    "/activities*": () => <Activities />,
    "/contact-us*": () => <Contact />,
    "/admin": () => <Admin />
}

export default () => {
    const route = useRoutes(routes) || <NotFound />;
    return (
        <div>
            <NavBar />
            {route}
            <Footer />
        </div>
    )
}