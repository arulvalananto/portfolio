'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VscPerson } from 'react-icons/vsc'
import { CiMenuFries } from 'react-icons/ci'
import { GrDocumentPdf } from 'react-icons/gr'
import { GoProjectSymlink } from 'react-icons/go'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useRouter, usePathname } from 'next/navigation'

import CustomDrawer from '../drawer'
import ExternalLink from '../external-link'
import { portfolio as constants } from '../../data'

const Navbar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    const onMailTo = () => {
        window.location.href = 'mailto:arulvalananto@gmail.com'
    }

    const onDownloadResume = () => {
        const downloadLink = document.createElement('a')
        downloadLink.href = '/Arul_Valan_Anto_Resume.pdf'
        downloadLink.download = 'Arul_Valan_Anto_Resume.pdf'
        downloadLink.click()
    }

    const onNavigateTo = (path: string) => {
        router.push(path)
        setIsOpen(false)
    }

    console.log('pathname', pathname)

    return (
        <div className="w-full h-full xl:w-7xl xl:max-w-7xl px-5 py-4 xl:px-4 m-auto flex items-center justify-between">
            <Link href="/" className="w-10 h-10" title="Arul Valan Anto's Logo">
                <Image
                    src="/logo.svg"
                    alt="Welcome to Arul Valan Anto's Portfolio"
                    width={38}
                    height={39}
                    className="object-cover"
                    priority
                />
            </Link>
            <div className="hidden min-[500px]:flex items-center gap-10 lg:gap-30 xl:gap-70">
                <div className="flex items-center gap-10 md:gap-16">
                    <Link
                        href="/about-me"
                        className={`${
                            pathname === '/about-me'
                                ? 'font-bold underline underline-offset-4 text-lg'
                                : 'font-medium text-base'
                        } text-black font-inter opacity-75 hover:opacity-100 hover:scale-105 transition duration-300`}
                    >
                        About me
                    </Link>
                    <Link
                        href="/work"
                        className={`${
                            pathname === '/work'
                                ? 'font-bold underline underline-offset-4 text-lg'
                                : 'font-medium text-base'
                        } text-black font-inter opacity-75 hover:opacity-100 hover:scale-105 transition duration-300`}
                    >
                        My Work
                    </Link>
                    <ExternalLink
                        href={constants.resumeDriveLink}
                        className="font-medium font-inter text-black text-base hidden sm:block opacity-75 hover:opacity-100 hover:scale-105 transition duration-300"
                        title="Resume"
                    />
                    {/* <a
                        download
                        href="/Arul_Valan_Anto_Resume.pdf"
                        className="font-medium font-inter text-black text-base opacity-75 hover:opacity-100 hover:scale-105 transition duration-300"
                    >
                        Resume
                    </a> */}
                </div>
                <div className="border-b-2 border-black">
                    <a
                        href="mailto:arulvalananto@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                    >
                        <span className="font-medium text-black text-base opacity-75 hover:opacity-100 hover:scale-105 transition duration-300">
                            Let&apos;s Talk
                        </span>
                        <FaArrowRightLong />
                    </a>
                </div>
            </div>
            <div className="block min-[500px]:hidden">
                <button
                    type="button"
                    aria-label="portfolio nav menu"
                    title="portfolio nav menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <CiMenuFries color="black" className="font-medium text-black text-xl" />
                </button>
                <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="mt-10 flex flex-col gap-5 px-3">
                        <button
                            type="button"
                            className="group text-left flex items-center gap-3"
                            onClick={() => onNavigateTo('/about-me')}
                        >
                            <VscPerson
                                size={24}
                                className="transition duration-300 group-hover:rotate-12"
                            />
                            <span className="font-medium text-black text-base font-DMSans">
                                About me
                            </span>
                        </button>
                        <button
                            type="button"
                            className="group text-left flex items-center gap-3"
                            onClick={() => onNavigateTo('/work')}
                        >
                            <GoProjectSymlink
                                size={24}
                                className="transition duration-300 group-hover:rotate-12"
                            />
                            <span className="font-medium text-black text-base font-DMSans">
                                My Work
                            </span>
                        </button>
                        <button
                            type="button"
                            className="group text-left flex items-center gap-3"
                            onClick={onDownloadResume}
                        >
                            <GrDocumentPdf
                                size={24}
                                className="transition duration-300 group-hover:rotate-12"
                            />
                            <span className="text-black text-base font-medium font-DMSans">
                                Download Resume
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={onMailTo}
                            className="group flex items-center gap-3"
                        >
                            <span className="font-medium text-black text-base font-DMSans">
                                Let&apos;s Talk
                            </span>
                            <FaArrowRightLong className="transition duration-300 group-hover:translate-x-2" />
                        </button>
                    </div>
                </CustomDrawer>
            </div>
        </div>
    )
}

export default Navbar
