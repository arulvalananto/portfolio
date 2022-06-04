import React from 'react';
import Head from 'next/head';

const Title = ({ name }) => {
    return (
        <Head>
            <title>{name}</title>
        </Head>
    );
};

export default Title;
