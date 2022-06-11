<script context="module" lang="ts">
    import type { Section } from "$lib/types/components";
    import { Hero, HaveAnyQuestions, WhatIsTLIP, WhyTLIP, HowDoesTLIPWork, Benefits, WhoAreWe } from "./sections";

    export const prerender = true;
</script>

<script lang="ts">
    const sections: Section[] = [
        {
            component: Hero,
            id: "hero"
        },
        {
            component: WhatIsTLIP,
            id: "WhatIsTLIP"
        },
        {
            component: WhyTLIP,
            id: "WhyTLIP",
            darkModeNavbar: true
        },
        {
            component: HowDoesTLIPWork,
            id: "HowDoesTLIPWork"
        },
        {
            component: WhoAreWe,
            id: "WhoAreWe"
        },
        {
            component: Benefits,
            id: "Benefits"
        },
        {
            component: HaveAnyQuestions,
            id: "HaveAnyQuestions"
        }
    ];
</script>

{#each sections as { component, id }}
    <svelte:component this={component} {id} />
{/each}
