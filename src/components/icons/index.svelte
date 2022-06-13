<script lang="ts">
    import {
        Decentralized,
        Secure,
        Upgrades,
        Data,
        DataAccess,
        Innovative,
        Time,
        Exports,
        Government,
        Trust,
        Visibility,
        Accuracy
    } from "./index";

    export let name: string;

    const icons = {
        decentralized: Decentralized,
        secure: Secure,
        upgrades: Upgrades,
        data: Data,
        dataAccess: DataAccess,
        innovative: Innovative,
        time: Time,
        exports: Exports,
        government: Government,
        trust: Trust,
        visibility: Visibility,
        accuracy: Accuracy
    };
</script>

{#if icons[name]}
    <div>
        <svelte:component this={icons[name]} {...$$restProps} />
    </div>
{/if}
