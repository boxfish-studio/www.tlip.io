<script context="module" lang="ts">
    import type { Section } from "$lib/types/components";
    import {
        Hero,
        HaveAnyQuestions,
        WhatIsTLIP,
        WhyTLIP,
        HowDoesTLIPWork,
        Benefits,
        WhoAreWe,
        UkEcosystem
    } from "./sections";

    export const prerender: boolean = true;
</script>

<script lang="ts">
    import { ObservedRoute } from "../../components";

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
            id: "WhyTLIP"
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
            component: UkEcosystem,
            id: "UkEcosystem"
        },
        {
            component: Benefits,
            id: "Benefits",
        },
        {
            component: HaveAnyQuestions,
            id: "HaveAnyQuestions"
        }
    ];
</script>

<ObservedRoute {sections} />
