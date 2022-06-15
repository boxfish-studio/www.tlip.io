<script lang="ts">
    import type { FaqSection } from "$lib/types/components";
    import { marked } from "marked";
    import { slide } from "svelte/transition";

    export let items: FaqSection[];
    let activeFaq: number;
</script>

{#each items as item, index}
    <div id={item.id}>
        <div class="cursor-pointer" on:click={() => (activeFaq = activeFaq !== index ? index : undefined)}>
            <div class={`flex justify-between items-center w-full`}>
                <span
                    id={item.id}
                    class="text-20 lg:text-28 leading-120 md:leading-110 tracking-0.02 font-semibold md:font-bold {activeFaq ===
                    index
                        ? 'text-blue-400'
                        : 'text-grey-600'}">{@html item.title}</span
                >
                <div
                    class="flex items-center justify-center relative ml-8 p-2.5 border {activeFaq === index
                        ? 'border-blue-400'
                        : 'border-grey-500'} rounded-xl"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="transform rotate-0 transition-transform duration-200	ease-in-out	"
                        class:dropdown={activeFaq === index}
                    >
                        <path d="M3 6L8 11L13 6" stroke="#212121" stroke-width="1.72854" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    {#if activeFaq === index}
        <div class="mt-6 md:mt-9 overflow-hidden text-grey-500" transition:slide={{ duration: 300 }}>
            <p>
                {@html marked(item.description)}
            </p>
        </div>
    {/if}
    {#if index != items.length - 1}
        <hr class="my-6 md:my-9" />
    {/if}
{/each}

<style lang="scss">
    svg {
        &.dropdown {
            @apply transform;
            @apply rotate-180;
            @apply transition-transform;
            @apply duration-200;
            @apply ease-in-out;
            path {
                stroke: #2d7aa0;
            }
        }
    }
</style>
