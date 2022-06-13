<script lang="ts">
    export let small: boolean = false;
    export let classes: string;
    export let withBorder: boolean = false;
</script>

<div class={`${classes} card py-8 md:py-14 px-6 md:px-9`} class:small class:withBorder>
    <slot name="eyebrow" />
    <slot name="title" />
    <slot name="body" />
</div>

<style lang="scss">
    .card {
        &.small {
            @apply py-6;
            @apply px-7;
        }
        &.withBorder {
            @apply border;
            @apply rounded-md;
            @apply border-grey-100;
        }

        &.work {
            min-height: 280px;
            @screen md {
                min-height: 380px;
            }
        }
    }
</style>
