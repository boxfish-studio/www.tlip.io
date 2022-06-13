<script context="module" lang="ts">
    import type { Section } from "$lib/types/components";
    import { Hero, HaveAnyQuestions, WhatIsTLIP, WhyTLIP, HowDoesTLIPWork, Benefits, WhoAreWe } from "./sections";

    export const prerender: boolean = true;
</script>

<script lang="ts">
import { ObservedRoute } from "../../components";

    const sections: Section[] = [
        {
            component: Hero,
            id: "hero",
            darkModeNavbar: true
        },
        {
            component: WhatIsTLIP,
            id: "WhatIsTLIP",
            darkModeNavbar: true
        },
        {
            component: WhyTLIP,
            id: "WhyTLIP",
            darkModeNavbar: true
        },
        {
            component: HowDoesTLIPWork,
            id: "HowDoesTLIPWork",
            darkModeNavbar: true
        },
        {
            component: WhoAreWe,
            id: "WhoAreWe"
        },
        {
            component: Benefits,
            id: "Benefits",
            darkModeNavbar: true
        },
        {
            component: HaveAnyQuestions,
            id: "HaveAnyQuestions"
        }
    ];
</script>

<ObservedRoute {sections}/>
