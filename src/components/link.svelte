<script lang="ts">
    export let title: string = undefined
    export let url: string = ''
    export let isExternal: boolean = false
    export let classes: string = ''
</script>

<a href={url} target={isExternal ? '_blank' : ''} rel={isExternal ? 'noopener noreferrer' : ''} class={classes}>{title}
</a>

<style lang="scss">
    a {
        @apply flex;
        @apply items-center;
        @apply justify-center;
    }
</style>
