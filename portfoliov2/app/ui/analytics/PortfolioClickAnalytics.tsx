'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'

const resumePath = '/Arul_Valan_Anto_Resume.pdf'
const portfolioLogger = posthog.logger

function capturePortfolioLinkClick(link: HTMLAnchorElement) {
    const href = link.getAttribute('href')

    if (!href || href.startsWith('#')) {
        return
    }

    const destination = new URL(href, window.location.href)
    const label = link.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100)
    const title = link.getAttribute('title')?.toLowerCase()

    if (destination.pathname === resumePath || title === 'resume') {
        posthog.capture('resume_downloaded', { placement: window.location.pathname })
        portfolioLogger.info('portfolio resume download initiated', {
            placement: window.location.pathname
        })
        return
    }

    if (destination.protocol === 'mailto:') {
        posthog.capture('contact_email_opened', { placement: window.location.pathname })
        return
    }

    if (destination.hostname === 'www.linkedin.com') {
        posthog.capture('linkedin_opened', { placement: window.location.pathname })
        return
    }

    const projectPath = destination.pathname.match(/^\/work\/([^/]+)$/)

    if (destination.origin === window.location.origin && projectPath) {
        posthog.capture('project_opened', { project_slug: projectPath[1] })
        portfolioLogger.info('portfolio project opened', { project_slug: projectPath[1] })
        return
    }

    const currentProject = window.location.pathname.match(/^\/work\/([^/]+)$/)

    if (currentProject && destination.origin !== window.location.origin) {
        posthog.capture('project_resource_opened', {
            destination_host: destination.hostname,
            link_label: label,
            project_slug: currentProject[1]
        })
        portfolioLogger.info('portfolio project resource opened', {
            destination_host: destination.hostname,
            project_slug: currentProject[1]
        })
    }
}

export default function PortfolioClickAnalytics() {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target

            if (!(target instanceof Element)) {
                return
            }

            const link = target.closest('a')

            if (link instanceof HTMLAnchorElement) {
                capturePortfolioLinkClick(link)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [])

    return null
}
