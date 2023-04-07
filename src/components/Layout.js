import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navlinks } from '../common/data';

const Layout = ({ children }) => {
    return (
        <main className="home">
            <nav className="home__navbar">
                <Link to="/" className="home__logo-container">
                    <StaticImage
                        src={'../../static/logo.svg'}
                        alt="arulvalanto portfolio"
                        className="home__logo"
                    />
                </Link>
                <ul className="home__navitem">
                    {navlinks.map(({ title, url, icon }, index, links) => (
                        <li className="home__navlink" key={index}>
                            <div className="home__navlink-container">
                                <FontAwesomeIcon icon={icon} fontSize={18} />
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="home_navlink-item"
                                >
                                    {title}
                                </a>
                            </div>
                            {links.length - 1 !== index && <span>/</span>}
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </main>
    );
};

export default Layout;
