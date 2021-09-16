<template>
<ImageCard/>
<FeatureSection/>
<Article/>
<QuoteBox/>
<ImageCardAlt/>
<ImageOverlayCard/>
<TestimonialCard/>
<HelpCard/>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "index",
    setup() {},
})
</script>
<route>
    {
    meta:{
    layout : "landing-page"
    }
    }
</route>
