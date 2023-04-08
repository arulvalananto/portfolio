import * as React from 'react';

import './projects.css';
import Layout from '../components/layout';
import BackButton from '../components/backButton';

const Projects = () => {
    return (
        <Layout>
            <section id="projects" className="projects">
                <BackButton title="Go back" className="backBtn__override" />
                <h1 className="projects__title">Projects</h1>
                <div className="projects__list">
                    <div className="projects__project"></div>
                </div>
            </section>
        </Layout>
    );
};

export default Projects;

export const Head = () => <title>Projects - Arul Valan Anto</title>;
