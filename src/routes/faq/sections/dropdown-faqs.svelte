<script lang="ts">
    import { marked } from "marked";
    import type { Faqs } from "$lib/types/components";

    export let data: Faqs;
    export let isExpandable: boolean = false;
    let activeSubsectionIds = [];

    const handleClick = subsectionId => {
        if (isExpandable) {
            let _activeSubsectionIds = activeSubsectionIds;
            _activeSubsectionIds.includes(subsectionId)
            ? _activeSubsectionIds.splice(activeSubsectionIds.indexOf(subsectionId), 1)
            : _activeSubsectionIds.push(subsectionId);
            activeSubsectionIds = _activeSubsectionIds;
        }
    };
</script>

<div class="w-full">
    <div id="contents">
        {#each data?.sections as section, index}
            <div class={`text-36 leading-110 font-bold mb-10 text-blue-600 ${index > 0 && "mt-20"}`}>
                {section.title}
            </div>
            <div id={section.id} class="border border-grey-100 rounded-2xl bg-white py-5">
                {#each section?.subsections as subsection}
                    <div
                        id={subsection.id}
                        class={`item first:pb-5 first:pt-0 last:pt-5 last:pb-0 py-5 ${
                            section.subsections.lastIndexOf(subsection) === section?.subsections.length - 1
                                ? ""
                                : "subsection-border relative"
                        }`}
                    >
                        <div
                            class={`mx-9 my-2 ${isExpandable ? "cursor-pointer" : ""}`}
                            on:click={() => handleClick(subsection.id)}
                        >
                            <div
                                class={`flex justify-between items-center w-full  ${index} ${section.subsections.length}`}
                            >
                                <span
                                    id={subsection.id}
                                    class="text-20 lg:text-28 leading-110 tracking-0.02 font-bold -mb-2 {activeSubsectionIds.includes(subsection?.id) ? 'text-blue-400' : 'text-grey-600'}"
                                    >{@html subsection.title}</span
                                ><br /><br />
                                {#if isExpandable}
                                    <div
                                        class="flex items-center justify-center relative ml-8 p-2.5 border {activeSubsectionIds.includes(subsection.id) ? 'border-blue-400' : 'border-grey-500'} rounded-xl"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class=""
                                            class:dropdown={activeSubsectionIds.includes(subsection.id)}
                                        >
                                            <path d="M3 6L8 11L13 6" stroke="#212121" stroke-width="1.72854" />
                                        </svg>
                                    </div>
                                {/if}
                            </div>
                        </div>

                        <div
                            class={`${
                                isExpandable ? "max-h-0" : ""
                            } px-9 overflow-hidden transition-all text-grey-500`}
                            class:active={activeSubsectionIds.includes(subsection.id)}
                        >
                            <p class="{
                            activeSubsectionIds.includes(subsection.id)
                                ? "bottom-border relative"
                                : ""
                        }">{@html marked(subsection.description)}</p>
                    </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    svg {
        &.dropdown {
            transform: rotate(180deg);
            transition: transform 0.2s ease-in-out;
            path {
                stroke: #2D7AA0;
            }
        }
    }
    .active {
        max-height: 1200px;
        @apply py-9;
        @apply mt-8;
        @apply -mb-5;
    }
     .bottom-border::before, .subsection-border::before {
        content: "";
        position: absolute;
        @apply border-b;
        @apply border-green-100;
    }
    .bottom-border::before {
        left: 0;
        top: -36px;
        width: 100%;
    }
    .subsection-border::before {
        bottom: -2px;
        left: 2.25rem;
        /* 100% - margin-X child */
        width: calc(100% - 4.5rem);
    }
</style>
