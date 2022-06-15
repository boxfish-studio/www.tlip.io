<script lang="ts">
    import { Footer, Header } from "../components";
    import "../scss/index.scss";

    const scrollIntoView = ({ target }): ((event: Event) => void) => {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth"
        });
    };

    const SITE_PAGES = [
        { title: "What is TLIP", url: "/", id: "#WhatIsTLIP", onClick: scrollIntoView },
        { title: "Why TLIP", url: "/", id: "#WhyTLIP", onClick: scrollIntoView },
        { title: "How does TLIP work", url: "/", id: "#HowDoesTLIPWork", onClick: scrollIntoView },
        { title: "Who are we", url: "/", id: "#WhoAreWe", onClick: scrollIntoView },
        { title: "Benefits", url: "/", id: "#Benefits", onClick: scrollIntoView },
        { title: "FAQ", url: "/faq" }
    ];

    const METADATA = {
        title: "TLIP: Paperless trade between border agencies and traders",
        description:
            "An infrastructure based on blockchain for secure and trusted exchange of data and trade certificates, to speed up border processes and provide real time visibility of consignments.",
        image: "/assets/metadata-image.png"
    };

    // TODO:Replace URL
    const DEPLOY_URL = "http://localhost:3000";
</script>

<svelte:head>
    <title>{METADATA.title}</title>
    <meta name="description" content={METADATA.description} />
    <meta name="keywords" content="TLIP,Trademark, TMEA" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={`${DEPLOY_URL}${METADATA.image}`} />
    <meta property="og:url" content={DEPLOY_URL} />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content={DEPLOY_URL} />
    <meta property="twitter:title" content={METADATA.title} />
    <meta property="twitter:description" content={METADATA.description} />
    <meta property="twitter:image" content={`${DEPLOY_URL}${METADATA.image}`} />
</svelte:head>

<Header items={SITE_PAGES} />
<main>
    <slot />
</main>
<Footer />
