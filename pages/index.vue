<script setup lang="ts">
useHead({
    title: "Галерея сайтов Анатолия Фролова • Узнай, на что я способен!"
});

import Logo from "~/components/Logo.vue";
import TelegramLogo from "~/components/icons/TelegramLogo.vue";
import useGallery from "~/composables/useGallery";

const gallery = await useGallery();

onMounted(() => {
    console.log(gallery);
})
</script>

<template>
    <div id="index">
        <header id="header">
            <div id="header__logo">
                <div id="header__logo-image-container">
                    <Logo id="header__logo-image"></Logo>
                </div>
                <div id="header__logo-text-container">
                    <h1>Анатолий Фролов: <strong>Галерея сайтов</strong></h1>
                    <span id="header__logo-slogan">Я могу сделать такой сайт и для тебя!</span>
                </div>
            </div>
            
            <div id="header__buttons">
                <button id="header__order-button" @click="navigateTo('https://t.me/anatoly_frolov', { external: true, open: { target: '_blank'} })"><TelegramLogo id="header__order-button-icon" />Заказать сайт</button>
            </div>
        </header>
        
        <section id="gallery">
            <GalleryCard
                v-for="page of gallery.pages"
                v-bind="page"
            />
        </section>
    </div>
</template>

<style scoped lang="sass">
*::selection
    background-color: $lovely-purple
    color: white

#index
    min-height: 100vh
    background-image: radial-gradient(ellipse farthest-corner at 50% 0%, mix($gentle-purple, $darken-purple, 50%) 0%, $darken-purple 70%, $darken-purple 100%)
    transition: filter 300ms ease-out
    
#index:has(#header__order-button:hover)
    filter: saturate(120%)
    
#index:has(#header__order-button:active)
    filter: saturate(150%)
    
header
    padding-block: 2em
    padding-inline: 3em
    display: flex
    align-items: center
    justify-content: space-between
    box-sizing: border-box
    flex-direction: row
    position: sticky
    top: 0
    z-index: 10
    background: linear-gradient(to bottom, transparentize($robust-purple, 0.20) 0%, transparentize($robust-purple, 0.20) 60%, transparentize($robust-purple, 1) 100%)
    
#header__logo
    display: flex
    align-items: center
    justify-content: stretch
    column-gap: 1em
    
#header__logo-image-container
    height: 3em
    aspect-ratio: 1 / 1
    
#header__logo-text-container
    color: white
    display: flex
    justify-content: center
    flex-direction: column
    > *
        text-shadow: 0 0 0.25em $darken-purple, 0 0 0.1em $darken-purple
    
h1
    font-size: 1em
    font-weight: 300
    margin-bottom: unset
    margin-top: 0.25em
    
#header__logo-slogan
    font-weight: 100
    opacity: 0.50
    
#header__logo-image
    animation: header__logo-image__idle 1000ms ease-in-out alternate infinite
    
    
@keyframes header__logo-image__idle
    0%
        transform: scale(0.99)
        filter: drop-shadow(0 0.125em 1em transparentize($yogurt-purple, 0.30))
        
    100%
        transform: scale(1.06)
        filter: drop-shadow(0.125em 0.125em 1em $yogurt-purple)
        
#header__order-button
    outline: 0.25em solid transparentize($yogurt-purple, 0.95)
    border-radius: 9999px
    padding-block: 0.5em
    padding-inline: 1.25em
    color: white
    background-image: radial-gradient(ellipse farthest-corner at 50% 100%, $yogurt-purple 0%, $lovely-purple 100%)
    filter: drop-shadow(0.125em 0.125em 1em transparentize($yogurt-purple, 0.50))
    box-shadow: inset 0 0 1em #FFFFFF44
    border: none
    border-top: 3px solid $yogurt-purple
    border-bottom: 3px solid $lovely-purple
    font-size: 1.1em
    transition: 400ms ease-out
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    column-gap: 0.5em
    
#header__order-button:hover
    outline: 0.5em solid transparentize($yogurt-purple, 0.80)
    background-image: radial-gradient(ellipse farthest-corner at 60% 70%, mix($yogurt-purple, white, 95%) 0%, $lovely-purple 100%)
    filter: drop-shadow(0.125em 0.125em 1.25em transparentize($yogurt-purple, 0.30))
    transition: 50ms ease-out
    transform: scale(1.035)
    
#header__order-button:active
    transform: scale(0.985)
    opacity: 0.95
    background-image: radial-gradient(ellipse farthest-corner at 60% 60%, mix($yogurt-purple, white, 80%) 0%, mix($lovely-purple, white, 90%) 100%)
    outline: 0 solid $yogurt-purple
    filter: drop-shadow(0 0 0.25em transparentize($yogurt-purple, 0.30))
    
#header__order-button-icon
    height: 1em
    aspect-ratio: 1 / 1
    
#gallery__landing
    height: 50vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    row-gap: 1em
    
h2
    color: white
    
#gallery__landing-text-font-switch
    animation: gallery__landing-text-font-switch__switch 3000ms alternate infinite
    
@keyframes gallery__landing-text-font-switch__switch
    0%
        font-family: "Unbounded", sans-serif
        
    20%
        font-family: "Rubik Mono One", sans-serif
        
    40%
        font-family: "Great Vibes", sans-serif
        
    60%
        font-family: "LXGW WenKai TC", sans-serif
        
    80%
        font-family: "Play", sans-serif
        
    100%
        font-family: "Bad Script", sans-serif
        
#gallery
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 3em
    padding-inline: 3em
    align-items: center
    justify-content: space-between
    padding-block: 8em
    animation: gallery__fade-in 1000ms cubic-bezier(.89,-0.36,.01,1.23)

@keyframes gallery__fade-in
    0%
        opacity: 0
        transform: translateY(0.5em) scale(0.985)
        
    100%
        opacity: 1
        transform: translateY(0)
        
@media (width <= 1700px)
    #gallery
        grid-template-columns: repeat(2, 1fr)
        
@media (width <= 900px)
    #gallery
        grid-template-columns: 1fr
        
@media (width <= 700px)
    #header__logo-text-container
        display: none
        
@media (width <= 500px)
    #gallery
        padding-block: 3em
        
    header, #gallery
        padding-inline: 1.5em
        
@media (width <= 400px)
    #header__order-button-icon
        display: none
</style>