import * as React from 'react';

import './projects.css';
import Layout from '../components/layout';
import BackButton from '../components/backButton';
import { StaticImage } from 'gatsby-plugin-image';
import { projects } from '../common/data';
import { Link } from 'gatsby';

const Projects = () => {
    return (
        <Layout>
            <section id="projects" className="projects">
                <BackButton title="Go back" className="backBtn__override" />
                <h1 className="projects__title">Projects</h1>
                <div className="projects__list">
                    {projects.map(
                        (
                            {
                                name,
                                logo,
                                websiteURL,
                                stack,
                                previewImages,
                                timeline,
                                description,
                            },
                            index
                        ) => {
                            console.log(name, logo);
                            return (
                                <div className="projects__project" key={index}>
                                    <div className="project__imgWrapper">
                                        <StaticImage
                                            src={previewImages[0]}
                                            alt="dummy"
                                            class="project__img"
                                        />
                                    </div>
                                    <div className="project__logoWrapper">
                                        <img
                                            src={logo}
                                            alt={`${name}'s logo`}
                                            className="project__logo"
                                            formats={['auto', 'webp', 'avif']}
                                        />
                                    </div>
                                    <div className="project__info">
                                        <div className="project__webLinkContainer">
                                            <a
                                                href={websiteURL}
                                                className="project__webLink"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Website
                                            </a>
                                            <p>
                                                {timeline?.starts} -{' '}
                                                {timeline?.ends}
                                            </p>
                                        </div>
                                        <h4 className="project__title">
                                            {name}
                                        </h4>
                                        <p className="project__description">
                                            {description}
                                        </p>
                                        <div className="project__stackContainer">
                                            <h6 className="project__stack">
                                                Stack
                                            </h6>
                                            <div className="project__stackList">
                                                {stack.map((tech, index) => (
                                                    <p key={tech}>
                                                        {tech}
                                                        {stack?.length - 1 !==
                                                            index && (
                                                            <span>,</span>
                                                        )}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="project__btnDetailsWrapper">
                                            <Link
                                                to="/"
                                                className="project__btnDetails"
                                            >
                                                Show More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Projects;

export const Head = () => <title>Projects - Arul Valan Anto</title>;
