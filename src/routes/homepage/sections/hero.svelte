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
            url: "mailto:tlip@iota.org"
        }
    ];
</script>

<section class="bg-green-200 w-full h-full relative pt-28 pb-14 lg:pt-40 lg:pb-28 z-20 overflow-hidden" {id}>
    <img
        src="/assets/background-hero.png"
        alt="background"
        class="absolute bottom-0 right-0 lg:w-4/5 lg:h-2/3 z-0 background-image"
    />
    <div class="container flex flex-col lg:flex-row items-center justify-center w-full h-full z-10">
        <div class="w-full text-center lg:text-left lg:w-1/2 lg:mr-36">
            <h1 class="mb-6">{HEADING.title}</h1>
            <h4 class="text-grey-500">{HEADING.description}</h4>
            <div class="flex justify-center lg:justify-start mt-6 lg:mt-10 lg:mb-0 mb-9">
                {#each BUTTONS as button}
                    <div class="mr-6 last:mr-0 uppercase">
                        <Button {...button} />
                    </div>
                {/each}
            </div>
        </div>
        <div class="w-full lg:w-1/2">
            <video class="h-full w-full object-cover image-shadow" muted controls preload="metadata">
                <source src="https://files.iota.org/media/TLIP_Demo_Video.mp4" type="video/mp4" />
                <track kind="captions" />
            </video>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        min-height: 680px;
    }
    .background-image {
        z-index: -1;
    }
</style>
