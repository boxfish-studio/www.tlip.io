<script lang="ts">
    export let videoSource: string;
    export let poster: string;
    // These values are bound to properties of the video
    let time: number = 0;
    let duration;
    let paused: boolean = true;

    let showControls: boolean = true;
    let showControlsTimeout: NodeJS.Timeout;

    // Used to track time of last mouse down event
    let lastMouseDown: any;

    function handleMove(e): void {
        // Make the controls visible, but fade out after
        // 2 seconds of inactivity
        clearTimeout(showControlsTimeout);
        showControlsTimeout = setTimeout(() => (showControls = false), 2000);
        showControls = true;

        if (!duration) return; // video not loaded yet
        if (e.type !== "touchmove" && !(e.buttons & 1)) return; // mouse not down

        const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const { left, right } = this.getBoundingClientRect();
        time = (duration * (clientX - left)) / (right - left);
    }

    // we can't rely on the built-in click event, because it fires
    // after a drag — we have to listen for clicks ourselves
    function handleMousedown(e): void {
        lastMouseDown = new Date();
    }

    function handleMouseup(e) {
        if (new Date() - lastMouseDown < 300) {
            if (paused) e.target.play();
            else e.target.pause();
        }
    }

    function format(seconds) {
        if (isNaN(seconds)) return "...";

        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        if (seconds < 10) seconds = "0" + seconds;

        return `${minutes}:${seconds}`;
    }
</script>

<div class="relative">
    <video
        {poster}
        playsinline
        class="image-shadow rounded-lg h-full w-full object-cover"
        on:mousemove={handleMove}
        on:touchmove|preventDefault={handleMove}
        on:mousedown={handleMousedown}
        on:mouseup={handleMouseup}
        bind:currentTime={time}
        bind:duration
        bind:paused
        muted
        preload="metadata"
    >
        <source src={videoSource} type="video/mp4" />

        <track kind="captions" />
    </video>
    {#if paused}
        <img
            src="/assets/playButton.svg"
            alt="play"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
    {/if}
    <div class="absolute bottom-0 w-full transition duration-100" style="opacity: {duration && showControls ? 1 : 0}">
        <div class="flex w-full justify-between h-full">
            <span>{format(time)}</span>
            <span>{format(duration)}</span>
        </div>
        <progress value={time / duration || 0} class="block w-full h-2" />
    </div>
</div>

<style>
    span {
        text-shadow: 0 0 8px black;
        @apply opacity-90;
        @apply py-0.5;
        @apply px-2;
        @apply text-white;
        width: 3em;
    }

    progress {
        -webkit-appearance: none;
        appearance: none;
    }

    progress::-webkit-progress-bar {
        @apply bg-black;
        @apply rounded-lg;
    }

    progress::-webkit-progress-value {
        @apply bg-green-100;
        @apply opacity-50;
    }
</style>
