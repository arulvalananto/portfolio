import * as React from 'react';

import './404.css';
import Layout from '../components/layout';
import BackButton from '../components/backButton';

const NotFound = () => {
    return (
        <Layout>
            <div className="notfound">
                <h2 className="notfound__message">Page Not Found</h2>
                <p className="notfound__description">
                    This page doesn't exist or was removed. We suggest you to
                    back to home
                </p>
                <BackButton title="Back to Home" />
            </div>
        </Layout>
    );
};

export default NotFound;

export const Head = () => <title>Not found</title>;
