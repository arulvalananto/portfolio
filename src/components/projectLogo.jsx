import React from 'react';

const ProjectLogo = ({ logo, alt }) => {
    return (
        <div className="project__logoWrapper">
            <img src={logo} alt={alt} className="project__logo" />
        </div>
    );
};

export default ProjectLogo;
