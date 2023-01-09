export default {
    head: [
        ['link', { rel: 'icon', 'type': 'image/x-icon', 'href': 'https://blazefire.cloud/assets/favicon/favicon.ico' }]
    ],
    title: 'Blazefire',
    description: 'Blazefire is a powerful new mdt',
    logo: 'https://blazefire.cloud/assets/images/blazefire_white.png',
    siteTitle: false,
    base: '/',
    lastUpdated: true,
    themeConfig: {
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
}