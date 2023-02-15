import { deConfig } from "./de"
import { enConfig } from "./en"

export default {
    head: [
        ['meta', { name: 'theme-color', content: "#00f6ff" }],
        ['link', { rel: 'icon', 'type': 'image/x-icon', 'href': 'https://blazefire.cloud/assets/favicon/favicon.ico' }]
    ],
    title: 'Blazefire Documentation',
    description: 'Blazefire is a powerful new mdt',
    siteTitle: false,
    base: '/',
    lastUpdated: true,
    themeConfig: {
        i18nRouting: true,
        nav: [
            {
                text: 'Website', link: 'https://blazefire.cloud'
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/blazefireio' },
            { icon: 'discord', link: 'https://discord.gg/R39SVKjz' },
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Getting Started', link: '/' },
                    { text: 'Packages', link: '/packages' },
                    { text: 'System Features', link: '/system-features' },
                    { text: 'Contribute', link: '/contribute' },
                ]
            },
            {
                text: 'General',
                items: [
                    { text: 'Domain / Subdomain', link: '/general/domain' },
                    { text: 'Feature Request', link: '/general/feature-request' },
                    { text: 'Database', link: '/general/database' },
                ]
            },
            {
                text: 'API',
                items: [
                    { text: 'Basic Usage', link: '/api/basic-usage' },
                    { text: 'Authorization', link: '/api/authorization' },
                    { text: 'Error Handling', link: '/api/error-handling' },
                    { text: 'Expanding Resources', link: '/api/expanding-resources' },
                    { text: 'Rate Limits', link: '/api/rate-limits' },
                ],
            },
            {
                text: 'Police API',
                items: [
                    { text: 'Citizens', link: '/api/police/citizens' },
                    { text: 'Vehicles', link: '/api/police/vehicles' },
                    // { text: 'Bolos', link: '/api/police/vehicles' },
                    // { text: 'Investigations', link: '/api/police/vehicles' },
                    // { text: 'Laws', link: '/api/police/vehicles' },
                    // { text: 'Penalties', link: '/api/police/vehicles' },
                    // { text: 'Bulletin Board', link: '/api/police/vehicles' },
                    // { text: 'Control Center', link: '/api/police/vehicles' },
                    // { text: 'Employees', link: '/api/police/vehicles' },
                    // { text: 'Roles', link: '/api/police/vehicles' },
                    // { text: 'Logs', link: '/api/police/vehicles' },
                ]
            },
            // {
            //     text: 'Ambulance API',
            //     items: [
            //         { text: 'Introduction', link: '/api/ambulance/introduction' },
            //         // { text: 'Citizens', link: '/api/ambulance/citizens' }
            //     ]
            // }
        ],
        footer: {
            message: 'Created with :heart: by oaky.',
            copyright: 'Copyright © 2022 - present Blazefire'
        },
    },
    locales: {
        de: {
            label: 'Deutsch',
            lang: 'de',
            ...deConfig
        },
        en: { 
            label: 'English', 
            lang: 'en',
            ...enConfig
        },
    }
}