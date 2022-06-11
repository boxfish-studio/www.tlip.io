<script lang="ts">
    import sections from './whatIsTLIP.json'

    export let id: string;
</script>

<section class="px-12 md:px-32 py-32 lg:py-72" {id}>
    <h2 class="text-center text-36 mb-9">What is TLIP?</h2>
    <p class="text-center font-normal text-16 leading-6 lg:px-64 tracking-0.04 mb-32">
        It is not a platform but a collaborative infrastructure, where all actors can share data and documents. Used by
        both border agencies and commercial actors, each party has full control of its own data, and all data available
        directly from the source.
    </p>
    {#each sections as {image, title, eyebrow, description}, idx}
        <div class="flex justify-center mb-32 last:mb-0">
            <div class="flex flex-col md:flex-row justify-between 2xl:max-w-7xl">
                <div class="md:order-{idx % 2 ? '1': '0'} mb-12 lg:mb-0 items-center flex">
                    <img src="./assets/{image}" alt={title} class="image-shadow">
                </div>
                <div class="w-full xl:w-7/12 md:{idx % 2 ? 'pr': 'pl'}-28 flex flex-col md:items-start items-center justify-center text-center md:text-left">
                    <h4 class="font-bold text-16 lg:text-20 tracking-0.02 leading-6 mb-3 capitalize lg:text-left">{eyebrow}</h4>
                    <p class="font-bold text-24 lg:text-32 tracking-normal lg:tracking-0.02 leading-10 mb-3">{title}</p>
                    <p class="font-normal text-14 lg:text-16 leading-6 tracking-0.04 ">{description}</p>
                </div>
            </div>
        </div>
        {/each}
</section>

<style lang="scss">
    .text-36 {
        font-size: 2.25rem;
    }
</style>
