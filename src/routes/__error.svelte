<script context="module" lang="ts">
    export function load({ error, status }) {
        return {
            props: {
                status,
                error: error?.message,
            },
        }
    }
</script>

<script lang="ts">
    import { Button } from '../components'
    export let status
    export let error

    const BUTTON = {
        title: 'Home',
        as: 'link',
        url: '/',
    }
</script>

<svelte:head>
    <title>TMEA / TLIP - {status}</title>
</svelte:head>

<section class="w-full h-screen flex items-center justify-center p-20 overflow-hidden">
    <div class="container flex flex-col items-center">
        <div class="flex flex-col items-center text-center justify-center z-10 mb-5 text-grey-500">
            <h2 class="uppercase flex text-64 leading-none">
                {status}
            </h2>
            <h4 class="my-2">{error}</h4>
        </div>
        <div class="flex home-button">
            <Button {...BUTTON} small/>
        </div>
    </div>
</section>