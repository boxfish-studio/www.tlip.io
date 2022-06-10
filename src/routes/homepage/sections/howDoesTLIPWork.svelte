<script lang="ts">
    import { Card, Icon } from "../../../components";
    export let id: string;
    const HEADINGS = {
        title: "How Does TLIP Work?"
    };
    const CARDS = [
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized",
                fill: "#00874C"
            }
        },
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized",
                fill: "#00874C"
            }
        },
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized",
                fill: "#00874C"
            }
        },
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized",
                fill: "#00874C"
            }
        },
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized",
                fill: "#00874C"
            }
        },
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized",
                fill: "#00874C"
            }
        }
    ];
</script>

<section class="container" {id}>
    <h2 class="mb-12 lg:mb-16 text-center mt-24 lg:mt-40">{HEADINGS.title}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {#each CARDS as { title, description, icon }}
            <Card classes="work" withBorder>
                <div slot="eyebrow" class="mb-6">
                    <Icon {...icon} />
                </div>
                <div slot="title">{title}</div>
                <div slot="body" class="text-grey-700 md:text-grey-800">
                    {description}
                </div>
            </Card>
        {/each}
    </div>
</section>
