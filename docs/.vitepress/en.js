const ogUrl = 'http://docs.blazefire.cloud/en';
const ogDescription = 'You\'ve come to the right place if you are looking for a management tool of various jobs for your GTA V roleplay server.';

export const enConfig = {
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-task-checkbox'))
        }
    },
    description: ogDescription,
    head: [
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { property: 'og:image', content: 'https://blazefire.cloud/assets/images/og_image.webp' }],
        ['meta', { property: 'og:title', content: 'Blazefire Dokumentation | GTA V Virtual Job Applications' }],
        ['meta', { property: 'og:type', content: 'Website' }],
        ['meta', { property: 'og:site_name', content: 'Blazefire Dokumentation | GTA V Virtual Job Applications' }],
    ],
    themeConfig: {
        nav: [
            {
                text: 'Website', 'link': 'https://blazefire.cloud'
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
                    { text: 'Getting Started', link: 'en/' },
                    { text: 'Roadmap', link: 'en/roadmap' },
                ]
            },
            {
                text: 'Einbindung',
                items: [
                    { text: 'JavaScript', link: 'en/integrations/javascript.md' },
                    { text: 'Vue', link: 'en/integrations/vue.md' },
                ]
            },
            {
                text: 'API',
                items: [
                    { text: 'Configuration', link: 'en/configuration' },
                    { text: 'Error', link: 'en/error-handling' },
                    { text: 'Expand resources', link: 'en/expanding-resources.md' }
                ]
            },
            {
                text: 'Resource',
                items: [
                    { text: 'Citizen', link: 'en/resources/citizen' },
                    { text: 'Vehicle', link: 'en/resources/vehicle' },
                    { text: 'Bolo', link: 'en/resources/bolo' },
                    // { text: 'Ermittlung', link: 'en/resources/investigation' },
                    // { text: 'Gesetz', link: 'en/resources/law' },
                    // { text: 'Mitarbeiter', link: 'en/resources/employee' },
                    // { text: 'Geldstrafen', link: 'en/resources/penalties' },
                    // { text: 'Schwarzes Brett', link: 'en/resources/bulletin-board' },
                    // { text: 'Rollen', link: 'en/resources/roles' },
                    // { text: 'Logs', link: 'en/resources/logs' },
                ]
            }
        ],
    },
}