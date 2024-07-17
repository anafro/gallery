<script setup lang="ts">

import GalleryPageTemplate from "~/components/templates/GalleryPageTemplate.vue";
import WindPowerIcon from "~/components/ecopulse-energy/WindPowerIcon.vue";
</script>

<template>
    <GalleryPageTemplate>
        <header class="inherits-page-padding">
            <a id="header__logo" href="#">EcoPulse Energy&trade;</a>
            
            <aside id="header__menu">
                <a href="#" class="header__menu-item">Стоимость</a>
                <a href="#" class="header__menu-item">Наша миссия</a>
                <a href="#" class="header__menu-item">Отзывы</a>
            </aside>
            
            <button id="header__cta">Заказать звонок</button>
        </header>
        
        <section id="landing__main">
            <WindPowerIcon id="landing__main-wind-power" />
            
            <h1>
                Познай волшебство<WindPowerIcon id="landing__main-h1-wind-power" /><br>
                возобновляемой энергии!
            </h1>
            
            <div id="landing__main-details">
                <button id="landing__main-cta">Заказать генератор →</button>
                <span id="landing__main-text">
                    * Благодаря ветряным генераторам,<br>
                    мы можем не только снизить выброс углекислого газа,<br>
                    но и уменьшить стоимость электроэнергии в разы!
                </span>
            </div>
        </section>
        
        <section id="landing__features">
            <span id="landing__features-call-out" class="call-out">Стать частью будущего проще простого!</span>
            <h2 id="landing__features-title">
                Перейдя на экологичную электроэнергию,<br>
                вы делаете мир приятным и чистым!
            </h2>
            <div id="landing__features-cards">
                <div class="landing__feature-card">
                    <span class="landing__feature-card-value">на 96%</span>
                    <span class="landing__feature-card-description">меньше выбросов углекислого газа СО2</span>
                </div>
                <div class="landing__feature-card">
                    <span class="landing__feature-card-value">
                        <WindPowerIcon id="landing__feature-card-value-wind-power"></WindPowerIcon>
                    </span>
                    <span class="landing__feature-card-description">не требует горючего топлива</span>
                </div>
            </div>
        </section>
        
        <div id="landing__ticker-container">
            <section id="landing__ticker">
                <div class="landing__ticker-line">
                    Электричество → Экологично → Выгодно → Волшебно → Будущее → Технологии → Энергия
                </div>
                <div class="landing__ticker-line">
                    Эко ← Сохранение природы ← Экономия ← Green Energy ← ГеоЭС ← Ветряная энергия
                </div>
            </section>
        </div>
        
        <div id="landing__show-off-container">
            <section id="landing__show-off">
                <span id="landing__show-off-call-out" class="call-out">От Мурманска до Петропавловска-Камчатского!</span>
                <h2 id="landing__show-off-title">
                    Мы уже установили 6 миллионов<br>
                    ветряных генераторов в России!
                </h2>
                <span id="landing__show-off-text">
                У нас были заказы от небольших компаний,<br>
                частных предпринимателей и даже от мировых корпораций.<br>
                Мы сможем найти что-то и для Вас!
            </span>
                <button id="landing__show-off-cta">Заказать звонок</button>
                <img id="landing__show-off-image" src="/ecopulse-energy/wind-power-in-sea.png" alt="Image Not Found">
            </section>
        </div>
        
        <footer>
            <div id="footer__left">
                <WindPowerIcon id="footer__wind-power"></WindPowerIcon>
                
                <a id="footer__logo" href="#">EcoPulse Energy&trade;</a>
                
                <aside id="footer__menu">
                    <a href="#" class="footer__menu-item">Стоимость</a>
                    <a href="#" class="footer__menu-item">Наша миссия</a>
                    <a href="#" class="footer__menu-item">Отзывы</a>
                </aside>
            </div>
            <div id="footer__right">
                EcoPulse Energy&trade; не является настоящей компанией!
                Я её выдумал, чтобы сделать для неё эту посадочную страницу
                <a href="/" id="footer__to-gallery-link">Посмотрите и другие мои работы!</a>
            </div>
        </footer>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')

*
    font-family: "Inter", sans-serif
    
*::selection
    background-color: lightgray
    
a
    color: black
    text-decoration: none
    
header
    display: flex
    align-items: center
    justify-content: space-between
    padding-block: 1em
  
header, section
    margin-inline: 18em
    
button
    color: white
    font-size: 1rem
    outline: none
    border: none
    padding-block: 0.5em
    padding-inline: 1.25em
    border-radius: 0.5em
    cursor: pointer

#header__logo
    color: black
    text-decoration: none
    
.header__menu-item
    color: #555555
    
#header__menu
    display: flex
    column-gap: 3em
    
#header__cta
    background: black
    
#landing__main
    background-image: url('/ecopulse-energy/wind-power-on-land.png')
    background-repeat: no-repeat
    background-size: cover
    height: 80vh
    overflow: hidden
    border-radius: 2em
    padding-block: 2em
    padding-inline: 5em
    user-select: none
    display: flex
    flex-direction: column
    row-gap: 2em
    
h1
    display: inline-block
    font-size: 4em
    background: linear-gradient(60deg, white 0%, #B2D6EB 70%, white 100%)
    background-clip: text
    -webkit-text-fill-color: transparent
    font-weight: 800
    margin-bottom: 0
    
#landing__main-wind-power
    width: 12em
    display: none

#landing__main-h1-wind-power
    width: 0.7em
    margin-left: 0.5em
    
#landing__main-details
    display: flex
    align-items: center
    justify-content: space-between
    width: 60%
    
#landing__main-cta
    background: #A7BED588
    backdrop-filter: blur(10px)
    
#landing__main-text
    color: white
    font-style: italic
    font-weight: 300
    
#landing__features
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    row-gap: 6em
    text-align: center
    
.call-out
    opacity: 0.50
    text-transform: uppercase
    letter-spacing: 0.125em
    font-weight: 400
    
h2
    font-size: 2.25em
    
#landing__features-cards
    display: flex
    align-items: center
    justify-content: center
    height: 7em
    column-gap: 3em
    
.landing__feature-card
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    flex-direction: column
    padding: 2em
    border-radius: 1.5em
    height: 100%
    position: relative
    overflow: hidden
    
    &::before
        display: inline-block
        position: absolute
        font-weight: 1000
        font-size: 16em
        top: -0.5em
        right: -0.25em
        opacity: 0.20
        color: white
    
    &:nth-child(1)
        filter: drop-shadow(-2em 4em 5em transparentize(#638F37, 0.40))
        background: #638F37
        border-bottom: 5px solid darken(#638F37, 5%)
        border-top: 5px solid lighten(#638F37, 5%)
        transform: rotate(-3deg)
        outline: 0.5em solid transparentize(#638F37, 0.90)
        &::before
            content: "↓"
        
    &:nth-child(2)
        filter: drop-shadow(2em -4em 5em transparentize(#0182A4, 0.40))
        background: #0182A4
        border-bottom: 5px solid darken(#0182A4, 5%)
        border-top: 5px solid lighten(#0182A4, 5%)
        transform: rotate(3deg)
        outline: 0.5em solid transparentize(#0182A4, 0.90)
        &::before
            content: "✓"
    
.landing__feature-card-value
    font-weight: 1000
    font-size: 4em
    color: white

#landing__feature-card-value-wind-power
    width: 1em
    
.landing__feature-card-description
    color: white
    
#landing__ticker
    margin-inline: 0
    height: 60vh
    transform: rotate(-9deg)
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    
#landing__ticker-container
    overflow: hidden
    
.landing__ticker-line
    font-weight: 1000
    font-style: italic
    font-size: 6em
    text-wrap: nowrap
    user-select: none
    
    &:nth-child(1)
        color: #638F37
        animation: landing__ticker-line__move 4000ms ease-in-out alternate infinite

    &:nth-child(2)
        color: #0182A4
        animation: landing__ticker-line__move 4000ms ease-in-out alternate-reverse infinite
        
@keyframes landing__ticker-line__move
    0%
        transform: translateX(-25%)
        
    100%
        transform: translateX(25%)
    
#landing__show-off
    height: 100vh
    display: flex
    align-items: flex-start
    justify-content: center
    flex-direction: column
    row-gap: 2em
    position: relative
    
#landing__show-off-container
    overflow-x: hidden

#landing__show-off-cta
    background-color: black
    
#landing__show-off-image
    position: absolute
    top: 50%
    right: -24em
    width: 34em
    aspect-ratio: 1 / 1
    transform: translateY(-50%)
    filter: drop-shadow(-2em -2em 3em transparentize(#115CFA, 0.70))
    
footer
    display: flex
    align-items: center
    justify-content: space-between
    background: black
    box-sizing: border-box
    padding-inline: 18em
    padding-block: 4em
    color: white
    position: relative
    overflow: hidden
    
#footer__wind-power
    position: absolute
    bottom: 0
    opacity: 0.05
    width: 32em
    
#footer__logo
    color: white

#footer__left
    display: flex
    flex-direction: column
    row-gap: 5em
    
#footer__menu
    display: flex
    flex-direction: column
    row-gap: 1.5em
    
.footer__menu-item
    color: #AAAAAA
    
#footer__right
    width: 18em
    color: #FFFFFF22
    text-align: right

#footer__to-gallery-link
    color: #FFFFFF44
    text-decoration: underline
    
@media (width <= 1800px)
    header, section
        margin-inline: 9em
        
    footer
        padding-inline: 9em
        
@media (width <= 1600px)
    #landing__main
        align-items: center
        justify-content: center
        background: linear-gradient(#638F3733, #0182A433), url("/ecopulse-energy/wind-power-on-land.png")
        text-align: center
    
    #landing__main-details
        flex-direction: column-reverse
        row-gap: 2em
        text-align: center
        width: 100%
        
    #landing__main-h1-wind-power
        display: none
    
    #landing__main-wind-power
        display: inline-block
        
@media (width <= 1150px)
    header, section
        margin-inline: 2em
        
    footer
        padding-inline: 2em
        
@media (width <= 900px)
    #header__menu
        display: none
        
    #landing__main-wind-power
        width: 6em
        
    #landing__show-off-image
        top: 25%
        right: -6em
        width: 16em
        
    h1
        font-size: 3em
        
    .landing__feature-card-value
        font-size: 3em
  
@media (width <= 700px)
    .landing__feature-card
        padding-inline: 0.5em
    
    #landing__show-off
        align-items: center
        justify-content: center
        text-align: center
        
    #landing__show-off-image
        top: 5%
        left: 50%
        transform: translateX(-50%)
        filter: none
        width: 8em
        
@media (width <= 500px)
    h1
        font-size: 2em
        
    footer
        flex-direction: column
        row-gap: 5em
        text-align: center
        
    #footer__right
        text-align: center
        
    #landing__features-cards
        flex-direction: column
        row-gap: 6em
        margin-block-start: 6em
        
    .landing__feature-card
        padding: 4em
        flex-basis: 8em
        
    .landing__feature-card-value
        font-size: 2em
        
    #landing__main-text
        display: none
</style>