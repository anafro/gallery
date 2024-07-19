<script setup lang="ts">
import TourCard from "~/components/nebula-nav/TourCard.vue";

definePageMeta({
    title: "Nebula Nav™ • Космические туры. Доступно! — Галерея сайтов Анатолия Фролова",
})


import GalleryPageTemplate from "~/components/templates/GalleryPageTemplate.vue";


const tours = ref([
    {
        seatsAvailable: 17,
        seatsTotal: 50,
        departureDate: "17 дек",
        planetName: "Меркурий",
        description: "Что скрывает за собой близкий друг Солнца? Покажем заброшенные поселения людей и пещеры!",
    },
    {
        seatsAvailable: 20,
        seatsTotal: 45,
        departureDate: "23 янв",
        planetName: "Венера",
        description: "Исследуйте захватывающие вулканы и невероятные кислотные озера!",
    },
    {
        seatsAvailable: 15,
        seatsTotal: 60,
        departureDate: "10 фев",
        planetName: "Марс",
        description: "Посетите знаменитые каньоны и полярные ледяные шапки!",
    },
    {
        seatsAvailable: 30,
        seatsTotal: 40,
        departureDate: "1 мар",
        planetName: "Ио",
        description: "Узнайте о таинственных пещерах и необычных геологических формациях!",
    },
    {
        seatsAvailable: 25,
        seatsTotal: 55,
        departureDate: "15 мар",
        planetName: "Европа",
        description: "Путешествуйте по древним кратерам и наслаждайтесь видами космоса!",
    },
    {
        seatsAvailable: 22,
        seatsTotal: 48,
        departureDate: "30 мар",
        planetName: "Ганимед",
        description: "Откройте для себя подземные океаны и загадочные руины!",
    },
    {
        seatsAvailable: 18,
        seatsTotal: 52,
        departureDate: "12 апр",
        planetName: "Каллисто",
        description: "Исследуйте ледяные равнины и древние ударные кратеры!",
    },
    {
        seatsAvailable: 19,
        seatsTotal: 47,
        departureDate: "25 апр",
        planetName: "Титан",
        description: "Откройте метановые озера и насладитесь видами на плотную атмосферу!",
    },
    {
        seatsAvailable: 21,
        seatsTotal: 46,
        departureDate: "10 мая",
        planetName: "Энцелад",
        description: "Увидьте гейзеры, выбрасывающие водяной пар в космос!",
    },
    {
        seatsAvailable: 16,
        seatsTotal: 49,
        departureDate: "22 мая",
        planetName: "Тритон",
        description: "Насладитесь видами замороженных азотных гейзеров и необычных ледяных ландшафтов!",
    },
    {
        seatsAvailable: 24,
        seatsTotal: 44,
        departureDate: "3 июн",
        planetName: "Мимас",
        description: "Исследуйте загадочные подземные тоннели и древние руины!",
    },
    {
        seatsAvailable: 23,
        seatsTotal: 43,
        departureDate: "15 июн",
        planetName: "Рея",
        description: "Путешествуйте по ледяным равнинам и увидьте удивительные кольцевые горы!",
    },
]);
</script>

<template>
    <GalleryPageTemplate>
        <div id="landing">
            <header>
                <a id="header__logo" href="#">Nebula Nav ->*</a>
                <button id="header__cta">Купить космический билет</button>
            </header>
            
            <section id="landing__main">
                <div id="landing__main-art">
                    <span id="landing__main-art-star">*</span>
                    <div id="landing__main-art-rocket">
                        <pre id="landing__main-art-rocket-shield"></pre>
                        <pre id="landing__main-art-rocket-body"> /\
/  \
|()|
|()|
|()|
|()|
||||
^^^^</pre>
<pre id="landing__main-art-fire">
\VVV/
 \V/
</pre>
                    </div>
                </div>
                <div id="landing__main-text-container">
                    <h1>
                        Мы покажем<br />
                        тебе <span id="landing__main-h1-italic">звёзды!</span>
                    </h1>
                    <p id="landing__main-text">
                        Мы летаем ко всем планетам Солнечной системы<br />
                        и их спутникам, организовываем групповые космические туры,<br />
                        снабжая всем необходимым! Летишь с нами?
                    </p>
                    <button id="landing__main-cta">Хочу полететь!</button>
                </div>
            </section>
            
            <section id="landing__tours">
                <div id="landing__tour-cards">
                    <TourCard v-for="tour of tours" v-bind="tour"/>
                </div>
            </section>
            
            <section id="landing__features">
            
            </section>
            
            <section id="landing__food">
            
            </section>
            
            <section id="landing__subscription">
            
            </section>
            
            <footer>
            
            </footer>
        </div>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap')

$dark: #0b0c12
$dust: #23273A
$vega: #2DA5F1
$leaf: #CCEB40
$fire: #ff9900
$nebula-gradient: linear-gradient(45deg, $vega 0%, $vega 10%, $leaf 40%, $leaf 70%, $fire 100%)
$page-padding: 2em

*
    font-family: "Victor Mono", sans-serif
    color: white
    
*::selection
    background: $fire
    color: white

#landing
    min-height: 100vh
    background-image: linear-gradient(transparentize(black, 0.4), transparentize($dark, 0.4)), url("/nebula-nav/nebula.jpg")
    background-attachment: fixed
    background-size: cover
    overflow: auto
    animation: landing-blooming 10000ms ease-in-out infinite alternate
    
@keyframes landing-blooming
    0%
        filter: saturate(100%) brightness(100%)
        
    5%
        filter: saturate(100%) brightness(100%)
    
    6%
        filter: saturate(120%) brightness(120%)
    
    12%
        filter: saturate(100%) brightness(100%)
        
    35%
        filter: saturate(100%) brightness(100%)
    
    36%
        filter: saturate(140%) brightness(120%)
        
    37%
        filter: saturate(100%) brightness(100%)
    
    37.5%
        filter: saturate(120%) brightness(120%)
        
    42%
        filter: saturate(100%) brightness(100%)
        
    48%
        filter: saturate(100%) brightness(100%)
    
    48.5%
        filter: saturate(120%) brightness(170%) contrast(120%)
    
    50%
        filter: saturate(100%) brightness(100%)
    
    60%
        filter: saturate(110%) brightness(110%)
        
    100%
        filter: saturate(100%) brightness(100%)
    
header
    background: linear-gradient(30deg, $dust 0%, transparent 30%, $dust 80%, $dust 100%)
    padding-block: 0.5em
    padding-inline: 2em
    display: flex
    align-items: center
    justify-content: space-between
    margin-block-start: 2em
    margin-inline: $page-padding
    border-radius: 0.5em
    user-select: none

#header__logo
    text-decoration: none

a, button
    position: relative
    
    &::before
        content: ">"
        display: inline-block
        position: absolute
        left: -1em
        color: white
        opacity: 0
        transform: translateX(-1em) scale(0)
        transition: 40ms ease-out
        -webkit-text-fill-color: white
        font-weight: 100
        
    &:hover::before
        transform: translateX(0) scale(1)
        opacity: 1
    
    
$button-shadow-intensity: 0.4
$button-shadow-radius: 1.5em
$button-shadow-dispersion: 2em
button
    padding: 0
    margin: 0
    border: none
    outline: none
    background-image: $nebula-gradient
    background-clip: text
    -webkit-text-fill-color: transparent
    font-size: 1em
    cursor: pointer
    transition: 1000ms cubic-bezier(.68,.32,.27,.96)
    font-weight: 700
    filter: drop-shadow((-$button-shadow-dispersion *.5) (-$button-shadow-dispersion *.5) $button-shadow-radius transparentize($vega, 0.9)) drop-shadow(0 0 $button-shadow-radius transparentize($leaf, 0.9)) drop-shadow(($button-shadow-dispersion *.5) ($button-shadow-dispersion *.5) $button-shadow-radius transparentize($fire, 0.9y))

button:hover
    filter: drop-shadow((-$button-shadow-dispersion) (-$button-shadow-dispersion) $button-shadow-radius transparentize($vega, 0)) drop-shadow(0 0 $button-shadow-radius transparentize($leaf, $button-shadow-intensity)) drop-shadow($button-shadow-dispersion $button-shadow-dispersion $button-shadow-radius transparentize($fire, $button-shadow-intensity))
    transition: 350ms cubic-bezier(.68,.32,.27,.96)
    
button:active
    transition: 50ms cubic-bezier(.68,.32,.27,.96)
    filter: drop-shadow((-$button-shadow-dispersion *.25) (-$button-shadow-dispersion *.25) ($button-shadow-radius *.25) transparentize($vega, 0.2)) drop-shadow(0 0 ($button-shadow-radius *.25) transparentize($leaf, 0.2)) drop-shadow(($button-shadow-dispersion *.25) ($button-shadow-dispersion *.25) ($button-shadow-radius *.25) transparentize($fire, 0.8))

section
    box-sizing: border-box
    padding-inline: $page-padding
    margin-block: 4em
    overflow: hidden
    position: relative
    
    &::after
        display: inline-block
        position: absolute
        bottom: 0
        left: 50%
        transform: translateX(-50%)
        font-size: 1em
        opacity: 0.33
        content: "***"
        letter-spacing: 0.5em
    
#landing__main
    min-height: 90vh
    display: flex
    align-items: stretch
    justify-content: stretch

    & > *
        width: 50%
        
#landing__main-text-container
    display: flex
    align-items: flex-start
    justify-content: center
    flex-direction: column
    row-gap: 0.25em
    animation: landing__main-text-container-floating 2000ms ease-in-out alternate infinite
    
@keyframes landing__main-text-container-floating
    0%
        transform: translateY(-1em)
        
    100%
        transform: translateY(1em)

h1
    font-size: 5em
    font-weight: 700
    
#landing__main-h1-italic
    font-style: italic
    
#landing__main-art
    perspective: 170px
    position: relative
    user-select: none
    > *
        position: absolute
    
#landing__main-art-star
    font-weight: 700
    color: white
    font-size: 16em
    filter: drop-shadow(0 0 0.25rem $vega) drop-shadow(0 0 1rem $vega)
    right: 20%
    top: 5%
    animation: landing__main-art-star-floating 3000ms cubic-bezier(1, 0, 1, 0) infinite
    
@keyframes landing__main-art-star-floating
    0%
        transform: translate(0rem, 0rem) scale(0.00) rotate(10deg)
        
    70%
        transform: translate(0rem, 0rem) scale(0.00) rotate(10deg)
        
    95%
        opacity: 1
        
    100%
        opacity: 0
        transform: translate(-128rem, 6rem) scale(50.00) rotate(1turn)
        
#landing__main-art-rocket
    top: 30%
    left: 30%
    font-size: 1.5em
    color: white
    font-weight: 700
    transform: rotateZ(41deg) rotateX(54deg) rotateY(360deg)
    animation: landing__main-art-rocket-flight 75ms linear infinite
    
@keyframes landing__main-art-rocket-flight
    0%
        transform: translateX(0) translateY(0) translateZ(0em) rotateZ(41deg) rotateX(54deg) rotateY(360deg)
        
    20%
        transform: translateX(-0.01rem) translateY(-0.2rem) translateZ(-0.1rem) rotateZ(41deg) rotateX(54deg) rotateY(360deg)
        
    50%
        transform: translateX(0.0rem) translateY(0.1rem) translateZ(-0.1rem) rotateZ(41deg) rotateX(54deg) rotateY(360deg)
        
    70%
        transform: translateX(0.01rem) translateY(-0.1rem) translateZ(-0.2rem) rotateZ(41deg) rotateX(54deg) rotateY(360deg)
        
    100%
        transform: translateX(0) translateY(0) translateZ(-0.3em) rotateZ(41deg) rotateX(54deg) rotateY(360deg)
    
#landing__main-art-fire
    color: white
    filter: brightness(150%) saturate(150%) drop-shadow(0 0 0.25rem $fire) drop-shadow(0 0 0.75rem $fire) drop-shadow(0 0 1.25rem $fire)

#landing__tours
    padding-block: 3em
    
#landing__tour-cards
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-template-rows: repeat(3, 1fr)
    column-gap: 1em
    row-gap: 2em
</style>