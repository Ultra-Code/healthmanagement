import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layout from 'vite-plugin-vue-layouts'
import components, { HeadlessUiResolver } from 'vite-plugin-components'
import icons, { ViteIconsResolver } from 'vite-plugin-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), pages(), layout(), icons(),
    components({ customComponentResolvers: [HeadlessUiResolver(), ViteIconsResolver()] })],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..', '.', '/'],
            strict: true,
        }
    }
})
