'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@mui/material';

const ActionBar = () => {
    const pathname = usePathname();

    console.log('pathname', pathname);

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-[#fafafa] shadow-sm w-full h-full rounded-md flex flex-row items-center justify-around gap-10 px-4 py-2 border-gray-200 border-[0.5px]">
                <Link
                    href="/"
                    className={`${
                        pathname === '/' ? 'border-b-2 border-red-400' : ''
                    } pb-1 text-black font-inter opacity-75 hover:opacity-100 hover:scale-105 transition duration-300`}
                >
                    <Tooltip title="Home" placement="bottom">
                        <Image
                            src="/action-bar/home.svg"
                            alt="Home"
                            width={24}
                            height={24}
                        />
                    </Tooltip>
                </Link>
                <Link
                    href="/about-me"
                    className={`${
                        pathname === '/about-me'
                            ? 'border-b-2 border-red-400'
                            : ''
                    } pb-1 text-black font-inter opacity-75 hover:opacity-100 hover:scale-105 transition duration-300`}
                >
                    <Tooltip title="About Me" placement="bottom">
                        <Image
                            src="/action-bar/about.svg"
                            alt="About Me"
                            width={24}
                            height={24}
                        />
                    </Tooltip>
                </Link>
                <Link
                    href="/work"
                    className={`${
                        pathname.split('/').includes('work')
                            ? 'border-b-2 border-red-400'
                            : ''
                    } pb-1 text-black font-inter opacity-75 hover:opacity-100 hover:scale-105 transition duration-300`}
                >
                    <Tooltip title="My Work" placement="bottom">
                        <Image
                            src="/action-bar/work.svg"
                            alt="My Work"
                            width={24}
                            height={24}
                        />
                    </Tooltip>
                </Link>
                <a
                    href="mailto:arulvalananto@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Tooltip
                        title="Let's Chat"
                        placement="bottom"
                        sx={{
                            background: '#000000 !important',
                        }}
                    >
                        <Image
                            src="/action-bar/message.svg"
                            alt="Let's Talk"
                            width={24}
                            height={24}
                        />
                    </Tooltip>
                </a>
            </div>
        </div>
    );
};

export default ActionBar;
