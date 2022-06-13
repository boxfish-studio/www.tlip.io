<script lang="ts">
    import type { Section } from '$lib/types/components'
    import { activeSectionId, darkModeNavbar } from '$lib/store'
    import { startActiveSectionObserver } from '$lib/utils'
    import { onMount } from 'svelte'

    export let sections: Section[] = []

    let container: HTMLElement

    $: darkModeNavbar.set(sections.find((s) => s.id === $activeSectionId)?.darkModeNavbar ?? false)

    onMount(() => {
        const disconnect = startActiveSectionObserver(container)
        return () => {
            darkModeNavbar.set(false)
            disconnect()
        }
    })
</script>

<div bind:this={container}>
    {#each sections as { component, id }}
        <svelte:component this={component} {id} />
    {/each}
</div>
