import React from 'react';

import constants from '../common/constants';

const Certificates = () => {
    return (
        <div className="certificates">
            <a
                href="https://www.credly.com/badges/ff81e28b-ecde-4cef-a494-834448af8b93"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="aws-certified-cloud-practitioner"
            >
                <img
                    width={150}
                    height={150}
                    src={`${constants.AWS_CLOUNDFRONT}/badges/aws-certified-cloud-practitioner`}
                    alt="aws-certified-cloud-practitioner"
                />
            </a>
        </div>
    );
};

export default Certificates;
