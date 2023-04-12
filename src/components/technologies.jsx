import React from 'react';

import Tech from '../components/tech';
import tech from '../common/tech.json';

const Technologies = () => {
    return (
        <>
            <Tech
                tech={tech.React}
                position={{ top: '100px', left: '200px' }}
            />
            <Tech
                tech={tech.Mongoose}
                position={{ top: '50px', left: '1000px' }}
            />
            <Tech tech={tech.Git} position={{ top: '0px', left: '1650px' }} />
            <Tech
                tech={tech.Webpack}
                position={{ top: '850px', left: '1800px' }}
            />
            <Tech
                tech={tech.Stripe}
                position={{ top: '700px', left: '925px' }}
            />
            <Tech
                tech={tech.Angular}
                position={{ top: '250px', left: '1900px' }}
            />
            <Tech
                tech={tech.NodeJS}
                position={{ top: '400px', left: '1500px' }}
            />
            <Tech
                tech={tech.Firebase}
                position={{ top: '790px', left: '350px' }}
            />
            <Tech
                tech={tech.PlayWright}
                position={{ top: '550px', left: '50px' }}
            />
            <Tech
                tech={tech.Redis}
                position={{ top: '280px', left: '500px' }}
            />
        </>
    );
};

export default Technologies;