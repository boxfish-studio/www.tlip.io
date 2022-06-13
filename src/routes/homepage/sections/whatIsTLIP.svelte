<script lang="ts">
    import sections from "./whatIsTLIP.json";

    export let id: string;
</script>

<section class="container mt-32 mb-36" {id}>
    <h2 class="text-center text-36 mb-9">What is TLIP?</h2>
    <p class="text-center leading-6 lg:px-52 tracking-0.04 mb-32">
        It is not a platform but a collaborative infrastructure, where all actors can share data and documents. Used by
        both border agencies and commercial actors, each party has full control of its own data, and all data available
        directly from the source.
    </p>
    {#each sections as { image, title, eyebrow, description }, idx}
        <div class="flex justify-center mb-24 md:mb-32 last:mb-0">
            <div class="flex flex-col md:flex-row justify-between 2xl:max-w-7xl">
                <div class="md:order-{idx % 2 ? '1' : '0'} mb-12 lg:mb-0 items-center flex">
                    <img src="./assets/{image}" alt={title} class="image-shadow" />
                </div>
                <div
                    class="w-full xl:w-7/12 md:{idx % 2
                        ? 'pr'
                        : 'pl'}-28 flex flex-col md:items-start items-center justify-center text-center md:text-left"
                >
                    <h4
                        class="font-bold text-15 lg:text-20 tracking-0.02 leading-6 capitalize lg:text-left text-grey-500"
                    >
                        {eyebrow}
                    </h4>
                    <h3 class="tracking-normal lg:tracking-0.02 md:my-3 my-2">{title}</h3>
                    <p class="text-12 lg:text-16 leading-6 tracking-0.04 text-grey-500">{description}</p>
                </div>
            </div>
        </div>
    {/each}
</section>
