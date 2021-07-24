import { createApp } from 'vue'
import App from './App.vue'
import "./assets/index.css"
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

createApp(App).mount('#app')
const routes = setupLayouts(generatedRoutes);
const route = createRouter({ history: createWebHistory(), routes })
