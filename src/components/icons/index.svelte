<script lang="ts">
    import { Decentralized } from "./index";
    export let name: string;

    const icons = {
        decentralized: Decentralized
    };
</script>

{#if icons[name]}
    <div>
        <svelte:component this={icons[name]} {...$$restProps} />
    </div>
{/if}
