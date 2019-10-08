import React from 'react';
import NotFound from './components/layouts/not_found';
import NavBar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Home from './components/landing/home';
import About from './components/about/about';
import Stories from './components/about/stories';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => <Home />,
    "/about": () => <About />,
    "/about/stories": () => <Stories />
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