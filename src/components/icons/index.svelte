<script lang="ts">
    import { Decentralized, Secure, Upgrades, Data, DataAccess, Innovative } from "./index";

    export let name: string;

    const icons = {
        decentralized: Decentralized,
        secure: Secure,
        upgrades: Upgrades,
        data: Data,
        dataAccess: DataAccess,
        innovative: Innovative
    };
</script>

{#if icons[name]}
    <div>
        <svelte:component this={icons[name]} {...$$restProps} />
    </div>
{/if}
