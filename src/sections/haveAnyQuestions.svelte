<script lang="ts">
    import type { Button as ButtonType } from "$lib/types/components";
    import { Button } from "../components";

    export let id: string;

    const BUTTONS: ButtonType[] = [
        {
            title: "Faq",
            url: "/faq"
        },
        {
            title: "Contact us",
            url: "/"
        }
    ];
</script>

<section class="px-6 md:px-32 py-20 bg-blue-300" {id}>
    <div class="flex text-white justify-between flex-col text-center lg:flex-row lg:text-left">
        <div class="max-w-2xl lg:mr-7">
            <h1 class="capitalize mb-6 flex text-36 md:text-64 justify-center">Have any questions?</h1>
            <p>
                New to TLIP and got questions? Check out our FAQ or contact us by email, we will get back to you as soon
                as we can.
            </p>
            <div class="buttons w-full flex gap-x-7 mt-10 lg:mt-20">
                {#each BUTTONS as button}
                    <div class="w-2/4 uppercase">
                        <Button classes="text-16 font-bold h-14" {...button} small secondary />
                    </div>
                {/each}
            </div>
        </div>
        <div class="w-full lg:max-w-md flex relative object-scale-down items-center mt-20 lg:mt-0 justify-center">
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
