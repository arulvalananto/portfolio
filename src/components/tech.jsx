import React from 'react';
import { Tooltip } from 'react-tooltip';

const Tech = ({ tech, number, position }) => {
    const speed = Math.random() * 8;
    const animationSpeed = speed > 1 ? speed : speed + 1;
    console.log(position);
    return (
        <>
            <img
                src={`https://d2sgkcesfdic4y.cloudfront.net/tech/${tech}`}
                alt="react"
                className={`floating tech tech__${number}`}
                style={{
                    top: position.top,
                    left: position.left,
                    'animation-duration': animationSpeed + 's',
                }}
                data-tooltip-id={tech}
                data-tooltip-content={tech}
            />
            <Tooltip id={tech} place="bottom" />
        </>
    );
};

export default Tech;
