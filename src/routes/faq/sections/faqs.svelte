<script lang="ts">
    import { FAQS as data } from "./faqs";
    import { Accordion } from "../../../components";
</script>

<section class="pt-12 pb-32 relative z-20">
    <div class="container">
        <div class="w-full">
            <div id="contents">
                {#each data?.sections as section, index}
                    <div
                        class={`text-32 md:text-36 leading-125 md:leading-110 tracking-0.02 font-bold mb-5 md:mb-10 text-blue-600 ${
                            index > 0 && "mt-10 md:mt-20"
                        }`}
                    >
                        {section.title}
                    </div>
                    <div id={section.id} class="border border-grey-100 rounded-2xl bg-white p-7 md:p-9">
                        {#each section.subsections as faq, index}
                            <Accordion {...faq} />
                            {#if index != section.subsections.length - 1}
                                <hr class="my-6 md:my-9" />
                            {/if}
                        {/each}
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
            #ffffff 13%,
            rgba(86, 204, 242, 0.2) 5%,
            rgba(86, 204, 242, 0.2) 90%,
            #ffffff 85%,
            #ffffff 100%
        );
    }
</style>
