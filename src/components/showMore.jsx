import { Link } from 'gatsby';
import React, { memo } from 'react';

const ShowMore = () => {
    return (
        <div className="project__btnDetailsWrapper">
            <Link to="/" className="project__btnDetails">
                Learn More
            </Link>
        </div>
    );
};

export default memo(ShowMore);
