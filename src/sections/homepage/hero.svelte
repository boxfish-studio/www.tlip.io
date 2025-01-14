<script lang="ts">
    import { Button } from "$components";
    import type { Button as ButtonType } from "$lib/types/components";
    import type { Heading } from "$lib/types/sections";
    export let id: string;

    const HEADING: Heading = {
        title: "Trade and Logistics Information Pipeline",
        description:
            "Creating paperless trade through a trusted infrastructure that enables secure and efficient cross-border collaboration between multiple parties."
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
        class="absolute bottom-54 lg:bottom-0 lg:w-4/5 lg:h-2/3 z-0 background-image"
    />
    <div class="container flex flex-col lg:flex-row items-center justify-center w-full h-full z-10">
        <div class="w-full text-center lg:text-left lg:w-1/2  lg:mr-8">
            <h1 class="mb-6">{HEADING.title}</h1>
            <h4 class="text-grey-500 lg:max-w-md metropolis-400">{HEADING.description}</h4>
            <div class="flex justify-center lg:justify-start mt-6 lg:mt-10 lg:mb-0 mb-9">
                {#each BUTTONS as button}
                    <div class="mr-6 last:mr-0 uppercase">
                        <Button {...button} />
                    </div>
                {/each}
            </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-10/12 max-w-xl">
            <video
                class="h-full w-full object-cover image-shadow"
                muted
                controls
                preload="metadata"
                poster="/assets/posters/Akeyos_flowers_poster.png"
            >
                <source src="https://files.iota.org/media/Akeyos_flowers.mp4" type="video/mp4" />
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
        width: 100%;
        min-width: 1200px;
        right: -50rem;
        @screen md {
            width: calc((100vw - 600px) / 2 + 600px + 10px);
            right: -30rem;
        }
        @screen lg {
            width: calc((100vw - 900px) / 2 + 900px + 10px);
            right: -12rem;
            top: 113px;
            height: auto;
        }
        @screen xl {
            width: calc((100vw - 1200px) / 2 + 1200px + 10px);
            right: 0px;
        }
    }
</style>
