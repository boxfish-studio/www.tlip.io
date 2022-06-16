<script lang="ts">
    import type { Heading } from "$lib/types/sections";

    export let id: string;
    const HEADING: Heading = {
        title: "What is TLIP?",
        description:
            "TLIP is a collaborative infrastructure, where all actors can share data and documents. Used by both border agencies and commercial actors, each party has full control of its own data, and all data is available directly from the source."
    };
    const cards = [
        {
            eyebrow: "For traders",
            title: "Quick Seamless and Digitised Document Sharing with Border Agencies",
            description:
                "TLIP provides transparency to governments and trading partners with real-time updates on consignments.",
            image: "forTraders.png"
        },
        {
            eyebrow: "For governments",
            title: "A Global Public Infrastructure Inclusive for All",
            description:
                "TLIP is a revolutionary distributed ledger technology solution that brings together the public and private sector to facilitate paperless international trade.",
            image: "forGovernments.png"
        },
        {
            eyebrow: "For Transporters",
            title: "Cargo Visibility and Optimised Planning",
            description:
                "TLIP works with multiple governments and businesses to establish a data infrastructure for the secure and trusted sharing of information in cross-border trade.",
            image: "forTransporters.png"
        },
        {
            eyebrow: "For ports",
            title: "International Partner to the Port Community System",
            description:
                "Digital versions of certificates of origin, phytosanitary certificates, export certificates, inspection reports and more are made available to destination customs and traders.",
            image: "forPorts.png"
        }
    ];
</script>

<section class="container py-16 md:pt-32 md:pb-36" {id}>
    <h2 class="text-center text-36 mb-9">{HEADING.title}</h2>
    <p class="text-center leading-6 lg:px-52 tracking-0.04 mb-6 md:mb-32">{HEADING.description}</p>
    {#each cards as { image, title, eyebrow, description }, idx}
        <div class="flex justify-center mb-9 md:mb-32 last:mb-0">
            <div class="flex flex-col md:flex-row justify-between">
                <div
                    class="{idx % 2
                        ? 'md:order-1'
                        : 'md:order-0'} mb-4 md:mb-12 lg:mb-0 items-center flex w-full md:w-1/2"
                >
                    <img src="./assets/{image}" alt={title} class="image-shadow {idx % 2 ? 'ml-auto' : 'mr-auto'}" />
                </div>
                <div
                    class={`w-full md:w-1/2 flex flex-col items-start justify-center text-left ${
                        idx % 2 ? "md:mr-16" : "md:ml-16"
                    }`}
                >
                    <h4 class="font-bold text-15 lg:text-20 tracking-0.02 leading-6 capitalize text-left text-grey-500">
                        {eyebrow}
                    </h4>
                    <h3 class="tracking-normal lg:tracking-0.02 my-3">{title}</h3>
                    <p class="text-grey-500">{description}</p>
                </div>
            </div>
        </div>
    {/each}
</section>
