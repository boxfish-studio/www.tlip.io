<script lang="ts">
    import { Footer, Header } from "../components";
    import "../scss/index.scss";

    const scrollIntoView = ({ target }):(event: Event) => void => {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth"
        });
    }

    const SITE_PAGES = [
        { title: "What is TLIP", url: "/", id: "#WhatIsTLIP", onClick: scrollIntoView },
        { title: "Why TLIP", url: "/", id: "#WhyTLIP", onClick: scrollIntoView },
        { title: "How does TLIP work", url: "/", id: "#HowDoesTLIPWork", onClick: scrollIntoView },
        { title: "Who are we", url: "/", id: "#WhoAreWe", onClick: scrollIntoView },
        { title: "Benefits", url: "/", id: "#Benefits", onClick: scrollIntoView },
        { title: "FAQ", url: "/faq" }
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
