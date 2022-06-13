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
            title: "Secure",
            description: "State-of-the-art security encryption avoids hacking by unauthorised parties.",
            icon: {
                name: "secure",
                fill: "#00874C"
            }
        },
        {
            title: "Upgrades Legacy IT",
            description: "Plugs into existing systems and facilitate expansion through open APIs.",
            icon: {
                name: "upgrades",
                fill: "#00874C"
            }
        },
        {
            title: "Data at the Source",
            description: "Keeps data local and traceable to source.",
            icon: {
                name: "data",
                fill: "#00874C"
            }
        },
        {
            title: "Data Owners Control Access",
            description:
                "Gives data producers control over who can access their data, thus guaranteeing privacy and confidentiality.",
            icon: {
                name: "dataAccess",
                fill: "#00874C"
            }
        },
        {
            title: "Innovative",
            description: "Immutable transparency and auditability through distributed ledger technology.",
            icon: {
                name: "innovative",
                fill: "#00874C"
            }
        }
    ];
    const SEE_IN_ACTION = {
        title: "See in Action",
        cards: [
            {
                video: "/assets/how-it-works-video.png",
                title: "Demo Video Title",
                description: "Interoperable. No vendor-lock in. Working with legacy systems."
            },
            {
                video: "/assets/how-it-works-video.png",
                title: "Flowers from Kenya to Holland",
                description:
                    "The benefits of TLIP are demonstrated by a shipment of flowers from Nairobi, Kenya, to Royal FloraHolland in the Netherlands."
            }
        ]
    };
</script>

<section {id}>
    <div class="container pt-24 lg:pt-40 pb-16 lg:pb-32">
        <h2 class="mb-12 lg:mb-16 text-center ">{HEADINGS.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {#each CARDS as { title, description, icon }}
                <Card classes="work bg-white" withBorder>
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
        <div>
            <h3 class="tracking-0.02 mb-16 text-center leading-125">{SEE_IN_ACTION.title}</h3>
            <div class="flex flex-col lg:flex-row">
                {#each SEE_IN_ACTION.cards as { title, video, description }}
                    <div class="w-full lg:w-1/2 lg:mr-20 last:mr-0 mb-16 lg:mb-0">
                        <!-- TODO: Replace img with video tag -->
                        <img src={video} alt="" class="image-shadow w-full" />
                        <h3 class="tracking-0.02 mb-4 leading-125 mt-6">{title}</h3>
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
