<script lang="ts">
    import { Button } from "../../../components";
    import type { Button as ButtonType } from "$lib/types/components";
    import type { Heading } from "$lib/types/sections";

    export let id: string;

    const HEADING: Heading = {
        title: "Trade and Logistics Information Pipeline",
        description:
            "Creating paperless trade throgh a trusted infrastructure that enables secure and efficient cross-border collaboration between multiple parties."
    };
    const BUTTONS: ButtonType[] = [
        {
            title: "Contact us",
            url: "https://www.iota.org/",
            isExternal: true
        }
    ];
</script>

<section class="bg-green-200 w-full h-screen relative py-44 z-20" {id}>
    <img
        src="/assets/background-hero.png"
        alt="background"
        class="absolute bottom-0 right-0 lg:w-4/5 lg:h-2/3 z-0 background-image"
    />
    <div class="container flex flex-col lg:flex-row items-center justify-center w-full h-full z-10">
        <div class="lg:w-1/2 lg:mr-36">
            <h1 class="text-white mb-6">{HEADING.title}</h1>
            <h4 class="text-white">{HEADING.description}</h4>
            <div class="flex mt-12 lg:mt-10 lg:mb-0 mb-12">
                {#each BUTTONS as button}
                    <div class="mr-6 last:mr-0">
                        <Button {...button} />
                    </div>
                {/each}
            </div>
        </div>
        <div class="lg:w-1/2">
            <img src="/assets/dummy-hero-image.png" alt="testing" class="image-shadow w-full" />
        </div>
    </div>
</section>

<style lang="scss">
    .background-image {
        z-index: -1;
    }
</style>
