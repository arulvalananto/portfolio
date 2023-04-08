import React from 'react';

import Navbar from './nav';

const Layout = ({ children }) => {
    return (
        <main className="home">
            <Navbar />
            {children}
        </main>
    );
};

export default Layout;
