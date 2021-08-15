declare module "*.vue" {
    import { DefineComponent } from "vue"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

// eslint-disable import/no-duplicates
declare module 'virtual:vite-icons/*' {
    import { FunctionalComponent, SVGAttributes } from 'vue'
    const component: FunctionalComponent<SVGAttributes>
    export default component
}
