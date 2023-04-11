import React from 'react';

const ProjectStack = ({ stack }) => {
    return (
        <div className="project__stackContainer">
            <h6 className="project__stack">Stack</h6>
            <div className="project__stackList">
                {stack.map((tech, index) => (
                    <p key={tech}>
                        {tech}
                        {stack?.length - 1 !== index && <span>,</span>}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ProjectStack;
