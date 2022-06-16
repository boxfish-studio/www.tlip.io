<script lang="ts">
    import type { Button as ButtonType } from "$lib/types/components";
    import Button from "./button.svelte";
    import Burger from "./burger.svelte";
    import { page } from "$app/stores";
    import { activeSectionId, lightModeNavbar } from "$lib/store";
    export let items = [];
    export { classes as class };

    let classes: string = "";
    let innerWidth: number;

    let sideMenuOpen: boolean = false;

    const BUTTON: ButtonType = {
        title: "CONTACT US",
        url: "mailto:tlip@iota.org",
        small: true,
        classes: "text-14",
        as: "link"
    };

    const toggleMenu: () => void = () => {
        sideMenuOpen ? closeMenu() : openMenu();
    };
    const closeMenu = () => {
        sideMenuOpen = false;
        document.querySelector("body").classList.remove("overflow-y-hidden");
    };
    const openMenu = () => {
        sideMenuOpen = true;
        document.querySelector("body").classList.add("overflow-y-hidden");
    };

    const logoClick: (event: Event) => void = e => {
        if ($page.path === "/") {
            e.preventDefault();
            document.body.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/");
        }
    };
</script>

<svelte:window bind:innerWidth />

<nav class="fixed py-1 z-50 w-full text-grey-600 {classes}" class:lightMode={$lightModeNavbar && !sideMenuOpen}>
    <div class="container flex justify-between">
        <a href="/" class="py-4" on:click={logoClick}>
            <img src="/assets/logo-TLIP.svg" alt="TLIP logo" id="logo" />
        </a>
        <div class="order-3 my-auto hidden lg:inline-block">
            <Button {...BUTTON} />
        </div>
        <div class="flex flex-row items-center justify-center">
            {#if items}
                <!-- Desktop -->
                <ul
                    class="flex-row items-center md:space-x-2 lg:space-x-3 xl:space-x-12 hidden w-full lg:flex transition-opacity duration-200"
                >
                    {#each items as { title, url, id, onClick }}
                        {#if title}
                            <li class="shrink-0">
                                {#if id && url.startsWith("/#")}
                                    <a
                                        href={url}
                                        on:click|preventDefault={onClick}
                                        class="{id === '#' + $activeSectionId ? 'highlight' : ''} hover:text-green-400"
                                        >{title}</a
                                    >
                                {:else if url || (id && url != $page.path)}
                                    <a href={url} class="{url === $page.path ? 'highlight' : ''} hover:text-green-400"
                                        >{title}</a
                                    >
                                {/if}
                            </li>{/if}
                    {/each}
                </ul>
                <!-- Burger Icon -- Mobile  -->
                <Burger bind:open={sideMenuOpen} onClick={toggleMenu} {sideMenuOpen} classes="flex my-auto lg:hidden" />
            {/if}
        </div>
    </div>
</nav>

<!-- Mobile Menu   -->
<aside class="bg-white h-screen w-0 fixed left-0 top-0 lg:hidden z-40 whitespace-nowrap {sideMenuOpen ? 'open' : ''}">
    <div class="h-full flex flex-col items-start justify-between">
        <ul
            class="container h-auto pt-20 text-black border-t-2 w-full transition-opacity duration-400 relative {!sideMenuOpen
                ? 'opacity-0 hidden'
                : 'opacity-100 block'}"
        >
            {#each items as { title, url, id, onClick }}
                {#if title}
                    <li class="py-4 nav-link min-w-max">
                        {#if id && url.startsWith("/#")}
                            <a
                                class={id === "#" + $activeSectionId ? "highlight" : ""}
                                href={url}
                                on:click|preventDefault={e => {
                                    onClick(e);
                                    closeMenu();
                                }}>{title}</a
                            >
                        {:else if url || (id && url != $page.path)}
                            <a on:click={closeMenu} class={url === $page.path ? "highlight" : ""} href={url}>{title}</a>
                        {/if}
                    </li>
                {/if}
            {/each}
        </ul>
        <div class="{sideMenuOpen ? 'flex' : 'hidden'} mx-auto mb-10">
            <Button {...BUTTON} classes="mx-auto" />
        </div>
    </div>
</aside>

<style lang="scss">
    aside {
        transition: width 0.25s ease-in-out;
        &.open {
            @apply w-screen;
        }
    }
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
        @supports ((-webkit-backdrop-filter: blur(4px)) or (backdrop-filter: blur(4px))) {
            @apply bg-transparent;
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
        }

        &.lightMode {
            @apply text-white;
            #logo {
                filter: invert(100%) sepia(100%) saturate(36%) hue-rotate(279deg) brightness(109%) contrast(112%);
            }
        }
    }
</style>
