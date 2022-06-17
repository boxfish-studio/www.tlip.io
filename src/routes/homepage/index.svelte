<script lang="ts">
    import type { Section } from "$lib/types/components";
    import {
        Hero,
        Partners,
        HaveAnyQuestions,
        WhatIsTLIP,
        WhyTLIP,
        HowDoesTLIPWork,
        Benefits,
        WhoAreWe,
        UkEcosystem
    } from "./sections";
    import { ObservedRoute } from "../../components";

    const sections: Section[] = [
        {
            component: Hero,
            id: "hero"
        },
        {
            component: Partners,
            id: "partners"
        },
        {
            component: WhatIsTLIP,
            id: "what-is-tlip"
        },
        {
            component: WhyTLIP,
            id: "why-tlip",
            lightModeNavbar: true
        },
        {
            component: HowDoesTLIPWork,
            id: "how-does-tlip-work"
        },
        {
            component: WhoAreWe,
            id: "who-we-are"
        },
        {
            component: UkEcosystem,
            id: "uk-ecosystem",
            lightModeNavbar: true
        },
        {
            component: Benefits,
            id: "benefins"
        },
        {
            component: HaveAnyQuestions,
            id: "questions"
        }
    ];
</script>

<ObservedRoute {sections} />
