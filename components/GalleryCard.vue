<script setup lang="ts">
import renderPage from "~/utils/html/html-image-renderer";
import type {Ref} from "vue";
import {Duration, type Milliseconds} from 'typed-duration';
const { milliseconds } = Duration;

const props = defineProps<{
    route: string,
    link?: string,
    name: string,
    description: string,
    category: string,
}>();

const isScreenshotVisible: Ref<boolean> = ref<boolean>(false);

function revealScreenshot(): void {
    const revealDelay: Milliseconds = milliseconds.of(1000 * Math.random() + 700);

    setTimeout(() => {
        isScreenshotVisible.value = true
    }, revealDelay.value);
}
</script>

<template>
<NuxtLink class="gallery__card" :to="link ?? `/${route}`" :external="link !== undefined">
    <div class="gallery__card-image-container">
        <div class="gallery__card-image-loading-filter" :class="{ 'loaded': isScreenshotVisible }">
            <div class="gallery__card-image-loading-circle"></div>
        </div>

        <div class="gallery__card-image">
            <div class="gallery__card-image-ui">
                <div class="gallery__card-image-button green"></div>
                <div class="gallery__card-image-button yellow"></div>
                <div class="gallery__card-image-button red"></div>
            </div>
            <ClientOnly>
                <NuxtImg placeholder alt="Website Screenshot" :src="`/screenshots/${route}.png`" class="gallery__card-screenshot" @load="revealScreenshot" />
            </ClientOnly>
        </div>
        <div class="gallery__card-image-filter"></div>
    </div>
    <div class="gallery__card-text-container">
        <span class="gallery__card-category">{{ category }}</span>
        <h3 class="gallery__card-name">{{ name }}</h3>
        <span class="gallery__card-description">{{ description }}</span>
    </div>
</NuxtLink>
</template>

<style scoped lang="sass">
$grain: url(data:image/png;base64,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)

.gallery__card
    text-decoration: none
    display: flex
    flex-direction: column
    background: radial-gradient(ellipse farthest-corner at 50% 100%, transparentize($lovely-purple, 0.60) 0%, transparentize($lovely-purple, 0.90) 100%)
    border-radius: 0.75em
    user-select: none
    overflow-y: hidden
    cursor: pointer
    transition: 1000ms ease-out
    border-bottom: 2px solid $gentle-purple
    box-shadow: inset 0 0 3em transparentize($yogurt-purple, 0.80)

.gallery__card:hover
    outline: 0.5em solid transparentize($yogurt-purple, 0.80)
    background: radial-gradient(ellipse farthest-corner at 60% 100%, transparentize($lovely-purple, 0.40) 0%, transparentize($lovely-purple, 0.90) 100%)
    transform: scale(1.02)
    filter: drop-shadow(0 0.25em 2em transparentize($yogurt-purple, 0.30))
    transition: 125ms cubic-bezier(.55,-0.21,0,1.01)

    .gallery__card-image-filter
        opacity: 0
    
    .gallery__card-image
        transition: all 175ms ease-out, transform 3500ms cubic-bezier(.55,-0.21,0,1.01)
        opacity: 1
        transform: rotateY(-15deg) scale(1.05) translateX(-25%) translateY(-60%)
        
    .gallery__card-name
        text-shadow: 0 0 0.5em white
        
    .gallery__card-description
        opacity: 1
        
.gallery__card:active
    outline: 0.25em solid $yogurt-purple
    background: radial-gradient(ellipse farthest-corner at 50% 100%, transparentize($lovely-purple, 0.20) 0%, transparentize($lovely-purple, 0.80) 100%)
    transform: scale(1)
    filter: drop-shadow(0 0.125em 1em transparentize($yogurt-purple, 0.30))
    
    .gallery__card-image-filter
        opacity: 0
    
    .gallery__card-image
        transition: all 75ms ease-out, transform 3500ms ease-out
        opacity: 1
        transform: rotateY(-5deg) scale(0.5) translateX(-25%) translateY(-80%)

.gallery__card-image-container
    overflow: hidden
    width: 100%
    height: 24em
    position: relative
    perspective: 300px
    background: $robust-purple
    background-image: radial-gradient($gentle-purple 1px, transparent 0)
    background-size: 40px 40px
    box-shadow: inset 0 0 2em black

.gallery__card-image-loading-filter
    position: absolute
    inset: 0
    display: grid
    place-items: center
    z-index: 99
    mix-blend-mode: overlay
    background-blend-mode: overlay
    background: $grain
    backdrop-filter: blur(20px)
    & ~ * .gallery__card-screenshot, & ~ * .gallery__card-image-ui
        visibility: hidden

    &.loaded
        animation: gallery__card-image-loading-filter-fade-out 500ms ease-out forwards

        .gallery__card-image-loading-circle
            animation: gallery__card-image-loading-circle-rotate 100ms linear infinite

        & ~ * .gallery__card-screenshot, & ~ * .gallery__card-image-ui
            visibility: visible

@keyframes gallery__card-image-loading-filter-fade-out
    to
        backdrop-filter: blur(0)
        opacity: 0

.gallery__card-image-loading-circle
    width: 4rem
    aspect-ratio: 1
    border-inline: white 0.25rem solid
    animation: gallery__card-image-loading-circle-rotate 300ms linear infinite
    transform-origin: center
    border-radius: 9999px
    filter: drop-shadow(0 0 1rem white) drop-shadow(0 0 1rem white) drop-shadow(0 0 1rem white)

@keyframes gallery__card-image-loading-circle-rotate
    0%
        transform: rotate(0turn)

    100%
        transform: rotate(1turn)

.gallery__card-image
    width: 100%
    transform-origin: 50% 0
    transform: rotateY(30deg) scale(1.1) translateX(25%) translateY(6em)
    border-radius: 1em
    position: relative
    border-left: $darken-purple 5px solid
    border-right: $darken-purple 5px solid
    display: flex
    transition: all 175ms ease-out, transform 1500ms cubic-bezier(.05,.79,.31,1.03)
    filter: drop-shadow(0 0 1em #00000033)
    
.gallery__card-screenshot
    width: 100%
    background: white
    margin-top: 1em
    
.gallery__card-image-ui
    position: absolute
    left: 0
    right: 0
    top: 0
    display: flex
    align-items: center
    column-gap: 0.5em
    justify-content: flex-end
    height: 1em
    background: $darken-purple
    box-sizing: border-box
    padding-inline: 1em
    
.gallery__card-image-button
    border-radius: 9999px
    width: 0.5em
    aspect-ratio: 1 / 1
    
    &.red
        background: #ff0073
        
    &.yellow
        background: #ffea00
        
    &.green
        background: #55ff00
    
.gallery__card-image-filter
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: $lovely-purple
    opacity: 0.50
    transition: 200ms ease-out
    mix-blend-mode: darken
    
.gallery__card-text-container
    padding-block: 1.75em
    padding-inline: 1em
    display: flex
    align-items: flex-start
    flex-direction: column
    margin-inline: 1.25em
    min-height: 12lvh
    
.gallery__card-category
    text-transform: uppercase
    letter-spacing: 0.06125em
    color: $yogurt-purple
    
.gallery__card-name
    color: white
    margin-top: 0.25em
    transition: 35ms ease-out
    font-size: 1.25em
    position: relative
    text-decoration: underline
    
.gallery__card-name::after
    display: inline-block
    content: "→"
    transform: rotate(-50deg) scale(0.8)
    position: absolute
    right: -1em
    
.gallery__card-description
    color: white
    font-weight: 100
    opacity: 0.80
    
@media (width <= 700px)
    .gallery__card-text-container
        padding-inline: 0.5em
    
    .gallery__card-image
        animation: gallery__card-image__mobile-scroll 10000ms infinite cubic-bezier(.71,-0.12,.35,.99)
        
    @keyframes gallery__card-image__mobile-scroll
        0%
            transform: scale(0.9) translateY(5%)
            
        50%
            transform: scale(0.8) translateY(-80%)
            
        100%
            transform: scale(0.9) translateY(5%)
    
    .gallery__card-image-container
        overflow: hidden
        width: 100%
        height: 12em
        
    .gallery__card-image-filter
        opacity: 0
    
    .gallery__card:hover
        outline: unset
        transform: scale(1)
        filter: drop-shadow(0 0.25em 2em transparentize($yogurt-purple, 0.30))
        transition: 125ms cubic-bezier(.55,-0.21,0,1.01)
        
        .gallery__card-image
            transition: all 175ms ease-out, transform 3500ms cubic-bezier(.55,-0.21,0,1.01)
            opacity: 1
            transform: none
        
        .gallery__card-name
            text-shadow: 0 0 0.5em white
        
        .gallery__card-description
            opacity: 1
</style>