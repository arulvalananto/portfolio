import React from 'react';
import { Tooltip } from 'react-tooltip';

const Tech = ({ tech, position }) => {
    const speed = Math.random() * 8;
    const animationSpeed = speed > 1 ? speed : speed + 1;

    return (
        <>
            <img
                src={`https://d2sgkcesfdic4y.cloudfront.net/tech/${tech}`}
                alt={tech}
                className="floating tech"
                style={{
                    top: position.top,
                    left: position.left,
                    animationDuration: animationSpeed + 's',
                }}
                data-tooltip-id={tech}
                data-tooltip-content={tech}
            />
            <Tooltip id={tech} place="bottom" />
        </>
    );
};

export default Tech;
