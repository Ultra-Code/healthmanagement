import { createApp } from "vue"
import "./assets/index.css"
import App from "./App.vue"
import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
import { createPinia } from "pinia"

const pageRoutes = setupLayouts(generatedRoutes)
const routes = createRouter({
    history: createWebHistory(),
    routes: pageRoutes,
})
createApp(App).use(routes).use(createPinia()).mount("#app")
