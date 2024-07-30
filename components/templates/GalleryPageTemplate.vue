<script setup lang="ts">
import type {Ref} from "vue";

const visible: Ref<boolean> = ref(true);
</script>

<template>
    <div id="gallery-page-template__back-to-gallery-bar" v-if="visible">
        <a href="/" id="gallery-page-template__back-to-gallery-link">
            <span id="gallery-page-template__back-to-gallery-link-long-text">Нажмите сюда, чтобы вернуться в Галерею</span>
            <span id="gallery-page-template__back-to-gallery-link-short-text">← Обратно в Галерею</span>
        </a>
        <button id="gallery-page-template__back-to-gallery-hide-button" @click="visible = false">
            <span id="gallery-page-template__back-to-gallery-hide-button-text">Скрыть эту панель</span>
            ×
        </button>
    </div>
    <slot></slot>
</template>

<style scoped lang="sass">
#gallery-page-template__back-to-gallery-bar
    background: $lovely-purple
    box-shadow: inset 0 0.5em 0.5em 0.5em transparentize($yogurt-purple, 0.80)
    display: flex
    align-items: center
    justify-content: center
    padding-block: 0.5em
    position: relative
    filter: drop-shadow(0 0.125em 1em transparentize($yogurt-purple, 0.50))
    z-index: 99999999
    
#gallery-page-template__back-to-gallery-link
    color: white
    text-decoration: none
    justify-self: center
    padding-inline: 4em
    
#gallery-page-template__back-to-gallery-hide-button
    position: absolute
    right: 1em
    color: white
    border: none
    outline: none
    opacity: 0.50
    background: none
    cursor: pointer
   
#gallery-page-template__back-to-gallery-link-short-text, #gallery-page-template__back-to-gallery-link-long-text
    text-align: center
    
#gallery-page-template__back-to-gallery-link-short-text
    display: none
    
@media (width <= 700px)
    #gallery-page-template__back-to-gallery-hide-button-text
        display: none
        
    #gallery-page-template__back-to-gallery-link-long-text
        display: none
        
    #gallery-page-template__back-to-gallery-link-short-text
        display: inline
</style>