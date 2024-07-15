<script setup lang="ts">

import Logo from "~/components/Logo.vue";
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
                <button id="header__order-button">Заказать сайт</button>
            </div>
        </header>
    </div>
</template>

<style scoped lang="sass">
#index
    min-height: 100vh
    background-image: radial-gradient(ellipse farthest-corner at 50% 0%, mix($gentle-purple, $robust-purple, 30%) 0%, $robust-purple 100%)
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
    border-radius: 0.5em
    padding-block: 0.5em
    padding-inline: 1em
    color: white
    background-image: radial-gradient(ellipse farthest-corner at 50% 100%, $yogurt-purple 0%, $lovely-purple 100%)
    filter: drop-shadow(0.125em 0.125em 1em transparentize($yogurt-purple, 0.50))
    box-shadow: inset 0 0 1em #FFFFFF44
    border: none
    border-top: 3px solid $yogurt-purple
    border-bottom: 3px solid $lovely-purple
    font-size: 1.1em
    transition: 125ms ease-out
    cursor: pointer
    
#header__order-button:hover
    outline: 0.5em solid transparentize($yogurt-purple, 0.80)
    background-image: radial-gradient(ellipse farthest-corner at 60% 70%, mix($yogurt-purple, white, 95%) 0%, $lovely-purple 100%)
    filter: drop-shadow(0.125em 0.125em 1.25em transparentize($yogurt-purple, 0.30))
    transition: 50ms ease-out
    
#header__order-button:active
    transform: scale(0.985)
    opacity: 0.95
    background-image: radial-gradient(ellipse farthest-corner at 60% 60%, mix($yogurt-purple, white, 80%) 0%, mix($lovely-purple, white, 90%) 100%)
    outline: 0 solid $yogurt-purple
    filter: drop-shadow(0 0 0.25em transparentize($yogurt-purple, 0.30))
</style>