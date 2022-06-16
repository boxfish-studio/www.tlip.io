<script lang="ts">
    import type { Link as LinkType } from "$lib/types/sections";
    import Link from "../components/link.svelte";

    let classes: string = "";

    export { classes as class };

    const footerLinks: LinkType[] = [
        {
            title: "Privacy Policy",
            url: "https://www.iota.org/privacy-policy",
            isExternal: true
        }
    ];
</script>

<footer class="py-5 bg-grey-500 text-white w-full {classes}">
    <div class="container flex flex-col text-center md:text-start md:flex-row w-full text-12">
        <p class="md:min-w-max">&copy; {new Date().getFullYear()} TLIP.io All rights reserved.</p>
        <div class="flex flex-col mt-6 md:mt-0 md:flex-row w-full">
            {#each footerLinks as link}
                <Link {...link} classes="md:ml-7" />
            {/each}
        </div>
    </div>
</footer>
