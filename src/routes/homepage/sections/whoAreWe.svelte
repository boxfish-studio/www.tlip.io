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
    <h1 class="mb-5 md:mb-10 text-left">{HEADING.title}</h1>
    <div class="flex flex-col xl:flex-row xl:gap-x-20">
        <div class="mb-7 md:mb-4 xl:mb-0 flex justify-center items-center">
            <div class="w-full flex flex-col gap-y-7 md:gap-y-4 ">
                {#each CARDS as { title, icon, description }}
                    <Card classes="" withBorder>
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
        <div class="w-full flex justify-center">
            <img src="./assets/who-are-we.png" alt="TLIP in everyday life" class="h-full w-full object-cover" />
        </div>
    </div>
</section>
