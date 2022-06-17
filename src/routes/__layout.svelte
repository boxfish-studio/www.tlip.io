<script lang="ts">
    import { scrollIntoView } from "$lib/utils";
    import { Footer, Header } from "../components";
    import "../scss/index.scss";

    const SITE_PAGES = [
        { title: "What is TLIP?", url: "/#what-is-tlip", id: "#what-is-tlip", onClick: scrollIntoView },
        { title: "Why TLIP?", url: "/#why-tlip", id: "#why-tlip", onClick: scrollIntoView },
        { title: "How does TLIP work?", url: "/#how-does-tlip-work", id: "#how-does-tlip-work", onClick: scrollIntoView },
        { title: "Who are we?", url: "/#who-we-are", id: "#who-we-are", onClick: scrollIntoView },
        { title: "Benefits", url: "/#benefins", id: "#benefins", onClick: scrollIntoView },
        { title: "FAQ", url: "/faq" }
    ];
</script>

<Header items={SITE_PAGES} />
<main>
    <slot />
</main>
<Footer />
