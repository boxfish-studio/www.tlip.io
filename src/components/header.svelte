<script lang="ts">
    import { page } from "$app/stores";
    import { activeSectionId, darkModeNavbar } from "$lib/store";
    import Burger from "./burger.svelte";
    import Button from "./button.svelte";
    import type { Button as ButtonType } from "$lib/types/components";
    export let items = [];
    export { classes as class };

    let classes: string = "";

    let sideMenuOpen: boolean = false;

    const BUTTON: ButtonType = {
        title: "CONTACT US",
        url: "/contact",
        small: true,
        classes: "text-14"
    };

    const toggleMenu: () => void = () => {
        sideMenuOpen ? closeMenu() : openMenu();
    };
    const closeMenu = () => {
        sideMenuOpen = false;
    };
    const openMenu = () => {
        sideMenuOpen = true;
    };
</script>

<nav
    class="fixed px-6 md:px-10 xl:container py-1 flex justify-between z-10 w-full bg-blur xl:max-w-none text-grey-600
    {classes}"
    class:darkMode={!$darkModeNavbar && !sideMenuOpen}
>
    <a href="/" class="py-4">
        <img src="/assets/logo-TLIP.svg" alt="TLIP logo" id="logo" />
    </a>
    <div class="order-3 my-auto hidden lg:inline-block">
        <Button {...BUTTON} />
    </div>
    <div class="flex flex-row">
        {#if items}
            <!-- Desktop -->
            <ul class="flex-row flex-wrap items-center hidden w-full lg:flex transition-opacity duration-200">
                {#each items as { title, url, id, onClick }}
                    {#if title}
                        <li class="px-4 first:pl-0 last:pr-0">
                            {#if id && url === $page.path}
                                <a
                                    href={id}
                                    on:click|preventDefault={onClick}
                                    class="{id === "#" + $activeSectionId ? "highlight" : ''} hover:text-green-400">{title}</a
                                >
                            {:else if url || (id && url != $page.path)}
                                <a href={url} class="{url === $page.path ? 'highlight' : ''} hover:text-green-400">{title}</a>
                            {/if}
                        </li>{/if}
                {/each}
            </ul>

            <!-- Mobile -->
            <div class="flex pt-3 lg:hidden">
                <Burger bind:open={sideMenuOpen} onClick={toggleMenu} {sideMenuOpen} />
            </div>
            <aside class="bg-green-200 h-screen w-0 absolute left-0 top-0 lg:hidden {sideMenuOpen ? 'open' : ''}">
                <ul
                    class="h-screen pt-20 px-10 text-black border-t-2 w-full transition-opacity duration-200 {!sideMenuOpen
                        ? 'opacity-0'
                        : 'opacity-100'}"
                >
                    {#each items as { title, url, id, onClick }}
                        {#if title}
                            <li class="py-4 nav-link min-w-max">
                                {#if id && url === $page.path}
                                    <a
                                        class={id === "#" + $activeSectionId ? "highlight" : ''}
                                        href={id}
                                        on:click|preventDefault={e => {
                                            onClick(e);
                                            closeMenu();
                                        }}>{title}</a
                                    >
                                {:else if url || (id && url != $page.path)}
                                    <a class={url === $page.path ? 'highlight' : ''} href={url}>{title}</a>
                                {/if}
                            </li>
                        {/if}
                    {/each}
                </ul>
            </aside>
        {/if}
    </div>
</nav>

<style lang="scss">
    nav {
        a {
            @apply transition-colors;
            @apply duration-150;
        }
        .highlight {
            @apply font-bold;
        }
        &.bg-blur {
            @apply bg-grey-100;
            @apply bg-opacity-20;
        }
        /* if backdrop support: transparent and blurred */
        @supports ((-webkit-backdrop-filter: blur(4px)) or (backdrop-filter: blur(4px))) {
            &.bg-blur {
                @apply bg-transparent;
                -webkit-backdrop-filter: blur(4px);
                backdrop-filter: blur(4px);
            }
            &.darkMode {
                @apply text-white;
                #logo {
                    filter: invert(100%) sepia(100%) saturate(36%) hue-rotate(279deg) brightness(109%) contrast(112%);
                }
            }
            aside {
                z-index: -1;
                @apply w-0;
                transition: width 0.3s ease-in-out;
                &.open {
                    @apply w-full;
                    @apply whitespace-nowrap;
                }
            }
        }
    }
</style>
