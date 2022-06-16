<script lang="ts">
    import type { Button as ButtonType } from "$lib/types/components";
    import { Button } from "../components";
    import type { Heading } from "$lib/types/sections";

    export let id: string;

    const BUTTONS: ButtonType[] = [
        {
            title: "Faq",
            url: "/faq"
        },
        {
            title: "Contact us",
            url: "mailto:tlip@iota.org"
        }
    ];

    const HEADING: Heading = {
        title: "Any questions?",
        description: "New to TLIP and full of questions?"
    };
</script>

<section class="py-20 bg-blue-300" {id}>
    <div class="container flex text-white justify-between flex-col text-center lg:flex-row lg:text-left">
        <div class="max-w-2xl lg:mr-7">
            <h1 class="capitalize mb-6 flex text-36 md:text-64 justify-center lg:justify-start">{HEADING.title}</h1>
            <p>{HEADING.description}</p>
            <div class="buttons w-full md:flex gap-x-7 mt-6 md:mt-10 lg:mt-28">
                {#each BUTTONS as button}
                    <div class="w-2/4 uppercase mx-auto mb-6 las:mb-0 md:mb-0">
                        <Button classes="text-16 font-bold h-14" {...button} small secondary />
                    </div>
                {/each}
            </div>
        </div>
        <div class="w-full lg:max-w-md flex relative object-scale-down items-center mt-12 lg:mt-0 justify-center">
            <img src="./assets/haveAnyQuestions.png" alt="TLIP in Africa" />
        </div>
    </div>
</section>

<style lang="scss">
    .buttons {
        @screen lg {
            max-width: 412px;
        }
    }
</style>
