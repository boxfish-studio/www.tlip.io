<script lang="ts">
    import { Carousel } from "../../../components";
    import { PARTNERS } from "./partners";
</script>

<div class="flex flex-col justify-center items-center space-y-8 pt-20">
    {#each PARTNERS as partnerCategory}
        <div class="w-full flex flex-col justify-center items-center">
            <h4 class="font-bold mb-10 text-center">{partnerCategory.title}</h4>
            <Carousel images={partnerCategory.logos} />
        </div>
    {/each}
</div>
