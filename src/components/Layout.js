import React from 'react';

import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <main className="home">
            <Navbar />
            {children}
        </main>
    );
};

export default Layout;
