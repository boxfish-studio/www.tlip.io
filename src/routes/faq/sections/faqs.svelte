<script lang="ts">
    import { FAQS as data } from "./faqs";
    import { DropdownFaqs } from "./";
</script>

<section class="pt-12 pb-32 relative z-20">
    <div class="container">
        <DropdownFaqs {data} isExpandable />
    </div>
</section>

<style lang="scss">
    section {
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 10%,
            rgba(86, 204, 242, 0.2) 5%,
            rgba(86, 204, 242, 0.2) 90%,
            #ffffff 85%,
            #ffffff 100%,
        );
    }
</style>
