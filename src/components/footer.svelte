<script lang="ts">
    import type { Link as LinkType } from "$lib/types/sections";

    let classes: string = "";

    export { classes as class };

    const footerLinks: LinkType[] = [
        {
            title: "Privacy Policy",
            url: "https://www.iota.org/privacy-policy"
        }
    ];
</script>

<footer class="py-5 bg-grey-500 text-white w-full {classes}">
    <div class="container flex flex-col text-start justify-start items-start md:flex-row w-full text-12">
        <p class="md:min-w-max">&copy; {new Date().getFullYear()} TLIP.io All rights reserved.</p>
        <div class="flex flex-col mt-3 md:mt-0 md:flex-row w-full">
            {#each footerLinks as link}
                <a href={link.url} class="md:ml-7 tracking-0.02 leading-160" target="_blank">{link.title}</a>
            {/each}
        </div>
    </div>
</footer>
