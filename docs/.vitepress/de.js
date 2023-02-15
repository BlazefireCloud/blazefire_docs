const ogUrl = 'http://localhost/de';
const ogDescription = 'German documentation for the Blazefire virtual job management.';

export const deConfig = {
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
                text: 'Einleitung',
                items: [
                    { text: 'Erste Schritte', link: 'de/' },
                    { text: 'Roadmap', link: 'de/roadmap' },
                ]
            },
            {
                text: 'Einbindung',
                items: [
                    { text: 'JavaScript', link: 'de/integrations/javascript.md' },
                    { text: 'Vue', link: 'de/integrations/vue.md' },
                ]
            },
            {
                text: 'API',
                items: [
                    { text: 'Konfiguration', link: 'de/configuration' },
                    { text: 'Fehler', link: 'de/error-handling' },
                    { text: 'Resourcen erweitern', link: 'de/expanding-resources.md' }
                ]
            },
            {
                text: 'Resourcen',
                items: [
                    { text: 'Bürger', link: 'de/resources/citizen' },
                    { text: 'Fahrzeug', link: 'de/resources/vehicle' },
                    { text: 'Fahndung', link: 'de/resources/bolo' },
                    // { text: 'Ermittlung', link: 'de/resources/investigation' },
                    // { text: 'Gesetz', link: 'de/resources/law' },
                    // { text: 'Mitarbeiter', link: 'de/resources/employee' },
                    // { text: 'Geldstrafen', link: 'de/resources/penalties' },
                    // { text: 'Schwarzes Brett', link: 'de/resources/bulletin-board' },
                    // { text: 'Rollen', link: 'de/resources/roles' },
                    // { text: 'Logs', link: 'de/resources/logs' },
                ]
            }
        ],
    },
}