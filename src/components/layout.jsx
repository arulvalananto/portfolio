import React, { memo } from 'react';

import Navbar from './navbar';

const Layout = ({ children }) => {
    return (
        <main className="layout">
            <Navbar />
            {children}
        </main>
    );
};

export default memo(Layout);
