<script lang="ts">
    import { Card, Icon } from "../../../components/index";

    export let id: string;
    const HEADINGS = {
        title: "What are the Benefits?",
        cards: [
            {
                title: "Time and Cost Saving",
                description:
                    "Reduced time and costs involved in moving goods between East Africa and destination markets.",
                icon: {
                    name: "time",
                    fill: "#2D7AA0",
                    width: 50,
                    height: 50
                }
            },
            {
                title: "Exports Competitiveness",
                description:
                    "Improve the competitiveness of the East African Community in globally-exported comodities.",
                icon: {
                    name: "decentralized",
                    fill: "#2D7AA0",
                    width: 50,
                    height: 50
                }
            },
            {
                title: "Government Collaboration",
                description:
                    "Increased collaboration between government and business through information exchange on a trusted infrastructure.",
                icon: {
                    name: "decentralized",
                    fill: "#2D7AA0",
                    width: 50,
                    height: 50
                }
            },
            {
                title: "Trust",
                description: "Availability of reliable advance information for all actors.",
                icon: {
                    name: "decentralized",
                    fill: "#2D7AA0",
                    width: 50,
                    height: 50
                }
            },
            {
                title: "Goods Visibility",
                description: "Increased visibility of goods in transit - location and border procedures.",
                icon: {
                    name: "decentralized",
                    fill: "#2D7AA0",
                    width: 50,
                    height: 50
                }
            },
            {
                title: "Data Accuracy",
                description:
                    "Digitization eliminates the need for repetitive entry of data sets making it possible to reuse data from source.",
                icon: {
                    name: "decentralized",
                    fill: "#2D7AA0",
                    width: 50,
                    height: 50
                }
            }
        ]
    };
</script>

<section {id}>
    <div class="container py-20 lg:py-28">
        <h2 class="mb-12 lg:mb-16 ">{HEADINGS.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {#each HEADINGS.cards as { title, description, icon }}
                <Card classes="work bg-white">
                    <div slot="eyebrow" class="mb-6">
                        <Icon {...icon} />
                    </div>
                    <h3 slot="title" class="tracking-0.02 mb-2 leading-110">{title}</h3>
                    <div slot="body" class="text-grey-500 tracking-0.04 leading-150">
                        {description}
                    </div>
                </Card>
            {/each}
        </div>
    </div>
</section>
