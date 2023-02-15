import DefaultTheme from 'vitepress/theme'
import './custom.css'
import dimWhite from './components/dimWhite.vue'
import important from './components/important.vue'
import checkbox from './components/checkbox.vue'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);

        ctx.app.component('dimWhite', dimWhite);
        ctx.app.component('important', important);
        ctx.app.component('cb', checkbox);
    },
}