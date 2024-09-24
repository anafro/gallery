<script setup lang="ts">
import Lenis from "lenis";

useHead({
    link: [
        {
            type: "text/css",
            rel: 'stylesheet',
            href: '/styles.css',
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png"
        },
        {
            rel: "manifest",
            href: "/site.webmanifest"
        },
        {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#762fea"
        },
        {
            rel: "stylesheet",
            href: "https://unpkg.com/lenis@1.1.13/dist/lenis.css"
        }
    ],
    meta: [
        {
            name: "msapplication-TileColor",
            content: "#603cba"
        },
        {
            name: "theme-color",
            content: "#ffffff"
        }
    ],
    script: [
        {
            src: "https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js",
        },
    ],
});

function initializeSmoothScroll(): void {
    const lenis = new Lenis({
        duration: 2.000,
    });

    const performScrollAnimationFrame = (time: number): void => {
        lenis.raf(time);
        requestAnimationFrame(performScrollAnimationFrame);
    }

    requestAnimationFrame(performScrollAnimationFrame);
}

onMounted((): void => {
    initializeSmoothScroll();
});
</script>

<template>
    <NuxtPage></NuxtPage>
</template>

<style lang="sass">
.page-enter-active, .page-leave-active
    transition: all 0.4s

.page-enter-from, .page-leave-to
    opacity: 0
    filter: blur(0.5rem)
    transform: translateY(-2.5rem)

.body
    background: $purple-background
</style>