<script setup lang="ts">

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
    ]
});

</script>

<template>
    <NuxtPage></NuxtPage>
</template>