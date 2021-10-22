import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layout from 'vite-plugin-vue-layouts'
import components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), pages({ pagesDir: "ui/pages" }),
    layout({ layoutsDir: "ui/layouts" }), Icons({ autoInstall: true }),
    components({
        dirs: "ui/components",
        resolvers: [
            HeadlessUiResolver(), IconsResolver()],
        // generate `components.d.ts` global declrations,
        // also accepts a path for custom filename
        dts: true,
    })
    ],
    resolve: {
        alias: [
            { find: '@', replacement: '/ui' },
            { find: '@pages', replacement: '/ui/pages' },
            { find: '@components', replacement: '/ui/components' },
            { find: '@assets', replacement: '/ui/assets' },
            { find: '@store', replacement: '/ui/store' },
        ]
    },
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..', '.', '/'],
            strict: true,
        }
    }
})
