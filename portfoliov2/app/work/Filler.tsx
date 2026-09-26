import React from 'react';
import Image from 'next/image';
import constants from '../lib/constants';

const Filler: React.FC = () => {
    return (
        <div className="bg-[#EC753A] hidden xl:block w-50 h-full min-h-46.75 max-h-46.75 rounded-2xl border-4 border-black p-3 relative select-none group cursor-pointer">
            <div className="w-25 h-25 bg-[#6842EF] border-4 border-black rounded-full absolute top-1/2 -translate-y-1/2 z-50 group-hover:scale-105 transition duration-200">
                <div className="animate-sizeup-slow">
                    <Image
                        src={constants.work.cards.filler[0].src}
                        alt={constants.work.cards.filler[0].alt}
                        width={75}
                        height={75}
                        className="translate-x-1 hover:scale-75 transition duration-300 ease-in-out hover:translate-y-3 hover:translate-x-4"
                    />
                </div>
            </div>
            <div className="w-18.75 h-18.75 bg-[#F1ADE2] border-4 border-black rounded-full absolute top-17.5 left-22.5 -translate-y-1/2 z-40 group-hover:scale-105 transition duration-200">
                <div className="animate-sizeup-moderate">
                    <Image
                        src={constants.work.cards.filler[1].src}
                        alt={constants.work.cards.filler[1].alt}
                        width={88}
                        height={84}
                        className="translate-x-4 -translate-y-2.5 hover:scale-150 hover:-translate-y-6 hover:rotate-12 transition duration-300 ease-in-out"
                    />
                </div>
            </div>
            <div className="w-12.5 h-12.5 bg-[#5BB1EC] border-4 border-black rounded-full absolute top-25 left-26.5 z-30 flex items-center justify-center group-hover:scale-105 transition duration-200">
                <div className="animate-sizeup-fast">
                    <Image
                        src={constants.work.cards.filler[2].src}
                        alt={constants.work.cards.filler[2].alt}
                        width={28}
                        height={32}
                        className="translate-x-1 hover:scale-150 transition duration-300 ease-in-out hover:translate-y-5"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filler;
