const ogUrl = 'http://localhost/de';
const ogDescription = 'English documentation for the Blazefire virtual job management.';

export const enConfig = {
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-task-checkbox'))
        }
    },
    description: ogDescription,
    head: [
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }]
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