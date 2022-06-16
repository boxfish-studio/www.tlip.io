<script lang="ts">
    import type { Section } from "$lib/types/components";
    import { Hero, Faqs } from "./sections";
    import HaveAnyQuestions from "../../sections/haveAnyQuestions.svelte";
    import { ObservedRoute } from "../../components";

    const sections: Section[] = [
        {
            component: Hero,
            id: "hero"
        },
        {
            component: Faqs,
            id: "faqs"
        },
        {
            component: HaveAnyQuestions,
            id: "HaveAnyQuestions"
        }
    ];
</script>

<ObservedRoute {sections} />
