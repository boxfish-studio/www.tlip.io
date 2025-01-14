<script lang="ts">
    import { Card, Icon } from "$components";
    import type { Heading } from "$lib/types/sections";
    export let id: string;
    const HEADINGS: Heading = {
        title: "How Does TLIP Work?"
    };
    const CARDS = [
        {
            title: "Decentralised",
            description: "Data is not stored or controlled centrally.",
            icon: {
                name: "decentralized"
            }
        },
        {
            title: "Secure",
            description: "State-of-the-art security encryption avoids hacking by unauthorised parties.",
            icon: {
                name: "secure"
            }
        },
        {
            title: "Upgrades Legacy IT",
            description: "Plugs into existing systems and facilitate expansion through open APIs.",
            icon: {
                name: "upgrades"
            }
        },
        {
            title: "Data at the Source",
            description: "Keeps data local and traceable to source.",
            icon: {
                name: "data"
            }
        },
        {
            title: "Data Owners Control Access",
            description:
                "Gives data producers control over who can access their data, thus guaranteeing privacy and confidentiality.",
            icon: {
                name: "dataAccess"
            }
        },
        {
            title: "Innovative",
            description: "Immutable transparency and auditability through distributed ledger technology.",
            icon: {
                name: "innovative"
            }
        }
    ];
    const SEE_IN_ACTION = {
        title: "TLIP in Action",
        cards: [
            {
                video: "https://files.iota.org/media/TLIP_Demo_Video.mp4",
                title: "TLIP Dashboard Video",
                description: "Interoperable. No vendor-lock in. Working with legacy systems.",
                poster: "/assets/posters/TLIP_Demo_Video_poster.png"
            },
            {
                video: "https://files.iota.org/media/TLIP_Documentary_2020.mp4",
                title: "Flowers from Kenya to Holland",
                description:
                    "The benefits of TLIP are demonstrated by a shipment of flowers from Nairobi, Kenya, to Royal FloraHolland in the Netherlands.",
                poster: "/assets/posters/TLIP_Documentary_2020_poster.png"
            }
        ]
    };
</script>

<section {id} class=" pt-24 lg:pt-40 pb-16 lg:pb-28">
    <div class="container">
        <h3 class="mb-5 lg:mb-16 text-center ">{HEADINGS.title}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-16 md:mb-32">
            {#each CARDS as { title, description, icon }}
                <Card classes="work bg-white" withBorder>
                    <div slot="eyebrow" class="mb-4 md:mb-6">
                        <Icon {...icon} />
                    </div>
                    <h3 slot="title" class="tracking-0.02 mb-4 leading-110 text-28">{title}</h3>
                    <div slot="body" class="text-grey-500 tracking-0.04 leading-150">
                        {description}
                    </div>
                </Card>
            {/each}
        </div>
        <div>
            <h3 class="tracking-0.02 mb-5 md:mb-16 text-center leading-125">{SEE_IN_ACTION.title}</h3>
            <div class="flex flex-col lg:flex-row">
                {#each SEE_IN_ACTION.cards as { title, video, description, poster }}
                    <div class="w-full lg:w-1/2 lg:mr-20 last:mr-0 mb-9 lg:mb-0 h-full">
                        <video
                            class="h-full w-full object-cover image-shadow"
                            muted
                            controls
                            preload="metadata"
                            {poster}
                        >
                            <source src={video} type="video/mp4" />
                            <track kind="captions" />
                        </video>
                        <h3 class="tracking-0.02 mb-3 md:mb-4 leading-125 mt-5 md:mt-6">{title}</h3>
                        <p>{description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 30%,
            rgba(86, 204, 242, 0.2) 30%,
            rgba(86, 204, 242, 0.2) 100%
        );
    }
</style>
