<script lang="ts">
    export let id: string;
    const HEADINGS = {
        title: "Why TLIP?",
        description:
            "Global trade today has a problem. Paper based trade documentation required for cross border exchange is slow, error prone and expensive."
    };
    const REASONS = [
        {
            title: "$500 Bn",
            description: "annual cost of paper based documentation"
        },
        {
            title: "200+",
            description: "number of information exchanges required for a shipment from Kenya to the Netherlands"
        },
        {
            title: "Zero",
            description: "the value of a shipment delayed due to lost documents"
        }
    ];
</script>

<section class="bg-green-500 w-full h-full relative" {id}>
    <div class="image w-full h-full lg:w-1/2 lg:absolute left-0 top-0 bottom-0" />
    <div class="w-full h-full lg:flex container justify-end">
        <div class="bg-green-500 w-full lg:w-1/2 py-16 lg:py-28 pl-6 lg:pl-24 xl:max-w-xl text-white">
            <div class="mb-9">
                <h2 class="mb-6">{HEADINGS.title}</h2>
                <p class="">{HEADINGS.description}</p>
            </div>
            {#each REASONS as reason}
                <div class="w-1/2 mb-6 last:mb-0">
                    <h3 class="mb-1.5">{reason.title}</h3>
                    <p>{reason.description}</p>
                </div>
            {/each}
        </div>
    </div>
    <hr />
</section>

<style lang="scss">
    .image {
        min-height: 400px;
        background: url("/assets/why-tlip.png");
        background-size: 100%;
        background-position: 45% 20%;
        block-size: auto;
        @apply bg-no-repeat;
        @apply bg-cover;
    }
</style>
