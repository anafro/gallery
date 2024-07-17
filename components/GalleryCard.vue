<script setup lang="ts">
import renderPage from "~/utils/html/html-image-renderer";
import type {Ref} from "vue";

const props = defineProps<{
    route: string,
    name: string,
    description: string,
}>();

</script>

<template>
<div class="gallery__card" @click="navigateTo(`/${route}`)">
    <div class="gallery__card-image-container">
        <div class="gallery__card-image">
            <div class="gallery__card-image-ui">
                <div class="gallery__card-image-button green"></div>
                <div class="gallery__card-image-button yellow"></div>
                <div class="gallery__card-image-button red"></div>
            </div>
            <img alt="Website Screenshot" :src="`/screenshots/${route}.png`" class="gallery__card-screenshot" />
        </div>
        <div class="gallery__card-image-filter"></div>
    </div>
    <div class="gallery__card-text-container">
        <h3 class="gallery__card-name">{{ name }}</h3>
        <span class="gallery__card-description">{{ description }}</span>
    </div>
</div>
</template>

<style scoped lang="sass">
.gallery__card
    display: flex
    align-items: center
    flex-direction: column
    background: radial-gradient(ellipse farthest-corner at 50% 100%, transparentize($lovely-purple, 0.60) 0%, transparentize($lovely-purple, 0.90) 100%)
    border-radius: 0.75em
    user-select: none
    overflow-y: hidden
    cursor: pointer
    transition: 175ms ease-out
    border-bottom: 2px solid $gentle-purple
    box-shadow: inset 0 0 3em transparentize($yogurt-purple, 0.80)

.gallery__card:hover
    outline: 0.5em solid transparentize($yogurt-purple, 0.80)
    background: radial-gradient(ellipse farthest-corner at 60% 100%, transparentize($lovely-purple, 0.40) 0%, transparentize($lovely-purple, 0.90) 100%)
    transform: scale(1.05)
    filter: drop-shadow(0 0.25em 2em transparentize($yogurt-purple, 0.30))
    transition: 125ms cubic-bezier(.55,-0.21,0,1.01)
    
    .gallery__card-image-filter
        opacity: 0
    
    .gallery__card-image
        transition: all 175ms ease-out, transform 3500ms cubic-bezier(.55,-0.21,0,1.01)
        opacity: 1
        transform: rotateY(-15deg) scale(1.05) translateX(-25%) translateY(-80%)
        
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
    box-shadow: inset 0 0 5em black
    
.gallery__card-image
    width: 100%
    opacity: 0.80
    transform-origin: 50% 0
    transform: rotateY(30deg) scale(1.1) translateX(25%) translateY(7%)
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
    align-items: center
    justify-content: center
    flex-direction: column
    margin-inline: 2em
    
    > *
        text-align: center
    
.gallery__card-name
    color: white
    margin-top: 0.25em
    transition: 35ms ease-out
    font-size: 1.25em
    position: relative
    
.gallery__card-name::after
    display: inline-block
    content: "→"
    transform: rotate(-40deg) scale(0.8)
    position: absolute
    right: -1.5em
    
.gallery__card-description
    color: white
    font-weight: 100
    opacity: 0.80
</style>