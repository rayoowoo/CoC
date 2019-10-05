import React from 'react';
import NavBar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Home from './components/landing/home';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => <Home />
}

export default () => {
    const route = useRoutes(routes);
    return (
        <div>
            <NavBar />
            {route}
            <Footer />
        </div>
    )
}