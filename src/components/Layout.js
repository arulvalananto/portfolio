import React from 'react';

import Navbar from './navbar';

const Layout = ({ children }) => {
    return (
        <main className="home">
            <Navbar />
            {children}
        </main>
    );
};

export default Layout;
