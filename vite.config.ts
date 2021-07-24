import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layout from 'vite-plugin-vue-layouts'
import components, { HeadlessUiResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), pages(), layout(), components({ customComponentResolvers: [HeadlessUiResolver()] })],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..', '.', '/'],
            strict:true,
        }
    }
})
