import * as React from 'react';
import { Link } from 'gatsby';

import './404.css';
import Layout from '../components/layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="notfound">
                <h2 className="notfound__message">Page Not Found</h2>
                <p className="notfound__description">
                    This page doesn't exist or was removed. We suggest you to
                    back to home
                </p>
                <Link to="/" className="nofound__redirectBtn">
                    <span role="img" aria-label="back to home">
                        👈
                    </span>
                    Back to Home
                </Link>
            </div>
        </Layout>
    );
};

export default NotFound;

export const Head = () => <title>Not found</title>;
