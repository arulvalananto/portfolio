import React, { useState } from 'react';

import './explore.css';
import Layout from '../components/layout';
import constants from '../common/constants';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';

const Explore = () => {
    const [toggle, setToggle] = useState(constants.PROJECTS_SECTION);

    const handleSwitchContent = (content) => {
        setToggle(content);
    };

    return (
        <Layout>
            <section id="projects" className="projects">
                <div className="explore__list">
                    <button
                        type="button"
                        className={`explore__item ${
                            toggle === constants.PROJECTS_SECTION
                                ? 'explore__item--active'
                                : ''
                        }`}
                        onClick={() =>
                            handleSwitchContent(constants.PROJECTS_SECTION)
                        }
                    >
                        Projects
                    </button>
                    <button
                        type="button"
                        className={`explore__item ${
                            toggle === constants.CERTIFICATE_SECTION
                                ? 'explore__item--active'
                                : ''
                        }`}
                        onClick={() =>
                            handleSwitchContent(constants.CERTIFICATE_SECTION)
                        }
                    >
                        Certificates
                    </button>
                </div>
                {toggle === constants.PROJECTS_SECTION ? (
                    <Projects />
                ) : (
                    <Certificates />
                )}
            </section>
        </Layout>
    );
};

export default Explore;

export const Head = () => <title>Explore - Arul Valan Anto</title>;
