<script lang="ts">
    import type { Heading } from "$lib/types/sections";
    export let id: string;
    const HEADING: Heading = {
        title: "UK Ecosystem of Trust",
        description:
            "TLIP has been selected by the UK Cabinet Office's Border Innovation Hub to pilot the infrastructure for trade routes between UK, Africa and the EU."
    };
    const INFO: Heading = {
        title: "Example of a Trade Route Between the UK and the EU",
        description:
            "The pilot is co-managed with the UK Institute of Export & International Trade and implemented with a range of traders, air and ocean transporters, ports and technology companies."
    };
</script>

<section class="container bg-blue-500 pt-16 pb-20 lg:rounded-md" {id}>
    <div class="flex flex-col text-white justify-center items-center relative">
        <h1 class="text-center mb-9">{HEADING.title}</h1>
        <p class="max-w-4xl text-center mb-7">{HEADING.description}</p>
        <img src="/assets/uk-ecosystem.png" alt="circle diagram" class="" />
        <h4 class="mb-4 text-center mt-9">{INFO.title}</h4>
        <small class="tracking-0.02 max-w-2xl text-center">{INFO.description}</small>
    </div>
</section>
