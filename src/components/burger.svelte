<script lang="ts">
    import { darkModeNavbar } from "$lib/store";

    export let open: boolean = false;
    export let onClick: (event: Event) => void = () => {};
    export let sideMenuOpen: boolean;

    const stroke: string = "currentColor";
    $: stroke_current = $darkModeNavbar ? "white" : "black";
    $: color = !$darkModeNavbar && !sideMenuOpen ? "white" : "black";
</script>

<button class="z-20 py-4 rounded-full" class:open on:click={onClick}>
    <svg width="24" height="24">
        <line class="top" x1="0" y1="3" x2="24" y2="3" {stroke} stroke-current={stroke_current} {color} />
        <line class="middle" x1="0" y1="11" x2="24" y2="11" {stroke} stroke-current={stroke_current} {color} />
        <line class="bottom " x1="0" y1="19" x2="24" y2="19" {stroke} stroke-current={stroke_current} {color} />
    </svg>
</button>

<style>
    line {
        transition: color 0.3s ease-in-out;
        stroke-width: 3px;
        transition-property: transform;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .open {
        transform: scaleX(0.75rem);
    }
    .open .top {
        transform: translateX(0.5rem) translateY(0rem) rotate(45deg);
    }
    .open .middle {
        display: none;
    }
    .open .bottom {
        transform: translateX(-0.5rem) translateY(0.325rem) rotate(-45deg);
    }
</style>
