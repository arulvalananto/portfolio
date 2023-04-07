import React, { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';
import { navlinks } from '../static/data';

const IndexPage = () => {
    return (
        <main className="home">
            <nav className="home__navbar">
                <div className="home__logo-container">
                    <StaticImage
                        src="../images/logo.svg"
                        alt="arulvalanto portfolio"
                        className="home__logo"
                    />
                </div>
                <ul className="home__navitem">
                    {navlinks.map(({ title, url, icon }, index, links) => (
                        <Fragment key={index}>
                            <li className="home__navlink">
                                <FontAwesomeIcon
                                    icon={icon}
                                    fontSize={18}
                                    size="large"
                                />
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="home_navlink-item"
                                >
                                    {title}
                                </a>
                            </li>
                            {links.length - 1 !== index && <span>/</span>}
                        </Fragment>
                    ))}
                </ul>
            </nav>
            <section id="home" className="home__main-section">
                <div className="home__info-container">
                    <h5 className="home__info-role">Full Stack Developer</h5>
                    <h1 className="home__info-name">Arul Valan Anto S</h1>
                    <p className="home__info-roleDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium sint, nobis dolorem quas ratione ex,
                        quibusdam voluptatum deserunt perferendis, illo ut
                        voluptates sequi? Molestias itaque, ex ratione
                        dignissimos autem maiores.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
