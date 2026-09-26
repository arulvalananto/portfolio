import React from 'react';
import Marquee from 'react-fast-marquee';

import { portfolio } from '@/app/data';

const { skills } = portfolio.person;
import SkillBadge from '../../skill-badge';

const SkillsSection: React.FC = () => {
    return (
        <Marquee pauseOnHover speed={40} delay={1}>
            <div className="py-4 pr-4 flex flex-row gap-4">
                {[...skills.primary, ...skills.secondary].map((skill) => (
                    <SkillBadge key={skill.title} {...skill} />
                ))}
            </div>
        </Marquee>
    );
};

export default SkillsSection;
