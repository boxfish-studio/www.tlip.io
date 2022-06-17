<script lang="ts">
    import type { Heading } from "$lib/types/sections";

    const HEADING: Heading = {
        title: "Frequent Asked Questions",
        description: "Have questions? We are here to help."
    };
</script>

<section class="bg-blue-300 w-full h-full relative pt-28 lg:pt-36 pb-20 lg:pb-28 z-20">
    <img
        src="/assets/background-hero.png"
        alt="background"
        class="background-image absolute -bottom-12 md:-bottom-60 right-0"
    />
    <div class="container">
        <div
            class="text-white flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left w-full h-full z-10"
        >
            <h1 class="mb-6">{HEADING.title}</h1>
            <p>{HEADING.description}</p>
        </div>
    </div>
</section>

<style lang="scss">
    .background-image {
        z-index: -1;
    }
</style>
