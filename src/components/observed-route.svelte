<script lang="ts">
    import type { Section } from '$lib/types/components'
    import { activeSectionId, lightModeNavbar } from '$lib/store'
    import { startActiveSectionObserver } from '$lib/utils'
    import { onMount } from 'svelte'

    export let sections: Section[] = []

    let container: HTMLElement

    $: lightModeNavbar.set(sections.find((s) => s.id === $activeSectionId)?.lightModeNavbar ?? false)

    onMount(() => {
        const disconnect = startActiveSectionObserver(container)
        return () => {
            lightModeNavbar.set(false)
            disconnect()
        }
    })
</script>

<div bind:this={container}>
    {#each sections as { component, id }}
        <svelte:component this={component} {id} />
    {/each}
</div>
