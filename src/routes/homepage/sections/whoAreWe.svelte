<script lang="ts">
    import type { Heading } from "$lib/types/sections";

    import { Icon, Card } from "../../../components";

    export let id: string;

    const CARDS = [
        {
            title: "Initiated",
            description:
                "by TradeMark East Africa and IOTA Foundation together with strategic partners from the public and private sector in East Africa.",
            icon: "friendship"
        },
        {
            title: "Implemented",
            description:
                "by government agencies with technical oversight from a Technical Working Group, representing both public and private entities.",
            icon: "dataQuality"
        },
        {
            title: "Funded",
            description:
                "through the generous support of the development agencies from the Netherlands, the United Kingdom and the United States of America.",
            icon: "finance"
        }
    ];

    const HEADING: Heading = {
        title: "Who are We?"
    };
</script>

<section class="container py-14 md:py-24" {id}>
    <h3 class="mb-5 md:mb-10 text-left text-36">{HEADING.title}</h3>
    <div class="flex flex-col lg:flex-row lg:gap-x-20">
        <div class="lg:w-1/2 mb-7 md:mb-4 lg:mb-0 flex justify-center items-center">
            <div class="w-full flex flex-col gap-y-7 md:gap-y-4 ">
                {#each CARDS as { title, icon, description }}
                    <Card classes="lg:py-6 lg:px-8" withBorder>
                        <div slot="eyebrow">
                            <Icon name={icon} />
                        </div>
                        <h4 slot="title" class="my-3 leading-120 font-bold">{title}</h4>
                        <p slot="body" class="text-grey-500">
                            {description}
                        </p>
                    </Card>
                {/each}
            </div>
        </div>
        <div class="lg:w-1/2">
            <img src="./assets/who-are-we.png" alt="TLIP in everyday life" class="h-full rounded-md" />
        </div>
    </div>
</section>

<style lang="scss">
    img {
        @screen lg {
            max-width: fit-content;
        }
    }
</style>
