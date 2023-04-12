import React, { memo } from 'react';
import { Link } from 'gatsby';

const BackButton = ({ title, to = '/', className = '' }) => {
    return (
        <Link to={to} className={`backBtn ${className}`}>
            <span role="img" aria-label={title}>
                👈
            </span>
            {title}
        </Link>
    );
};

export default memo(BackButton);
