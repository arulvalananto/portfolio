import React from 'react';
import { Link } from 'gatsby';

const ShowMore = () => {
    return (
        <div className="project__btnDetailsWrapper">
            <Link to="/" className="project__btnDetails">
                Show More
            </Link>
        </div>
    );
};

export default ShowMore;
