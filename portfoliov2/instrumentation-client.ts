import posthog from 'posthog-js'

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN

if (projectToken) {
    posthog.init(projectToken, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageleave: true,
        capture_pageview: true,
        defaults: '2026-05-30',
        disable_session_recording: true
    })
}
