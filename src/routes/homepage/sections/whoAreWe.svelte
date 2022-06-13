<script lang="ts">
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
                "by government agencies and a Technical Working Group, representing both public and private entities, to oversee project.",
            icon: "dataQuality"
        },
        {
            title: "Funded",
            description:
                "through the generous support of the development agencies from The Netherlands, The United Kingdom and The United States of America.",
            icon: "finance"
        }
    ];
</script>

<section class="container py-24" {id}>
    <h1 class="mb-10 text-center xl:text-left">Who are We?</h1>
    <div class="flex flex-col xl:flex-row xl:gap-x-20">
        <div class="mb-20 xl:mb-0 flex justify-center items-center">
            <div class="w-full flex flex-col gap-y-4 ">
                {#each CARDS as { title, icon, description }}
                <Card classes="" withBorder>
                    <div slot="eyebrow">
                        <Icon name={icon} />
                    </div>
                    <h3 slot="title" class="tracking-0.02 my-3 leading-110">{title}</h3>
                    <div slot="body" class="text-grey-500 tracking-0.04 leading-150">
                        {description}
                    </div>
                </Card>
                {/each}
            </div>
        </div>
        <div class="w-full flex justify-center">
            <img src="./assets/who-are-we.png" alt="TLIP in everyday life" class="h-full object-cover"/>
        </div>
    </div>
</section>
