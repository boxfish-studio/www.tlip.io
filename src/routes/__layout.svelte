<script lang="ts">
    import { scrollIntoView } from '$lib/utils'
    import { Footer, Header } from "../components";
    import "../scss/index.scss";

    const SITE_PAGES = [
        { title: "What is TLIP", url: "/#WhatIsTLIP", id: "#WhatIsTLIP", onClick: scrollIntoView },
        { title: "Why TLIP", url: "/#WhyTLIP", id: "#WhyTLIP", onClick: scrollIntoView },
        { title: "How does TLIP work", url: "/#HowDoesTLIPWork", id: "#HowDoesTLIPWork", onClick: scrollIntoView },
        { title: "Who are we", url: "/#WhoAreWe", id: "#WhoAreWe", onClick: scrollIntoView },
        { title: "Benefits", url: "/#Benefits", id: "#Benefits", onClick: scrollIntoView },
        { title: "FAQ", url: "/faq" },
    ];
</script>

<svelte:head>
    <title>TMEA / TLIP</title>
</svelte:head>

<Header items={SITE_PAGES} />
<main>
    <slot />
</main>
<Footer />
