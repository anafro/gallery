<script setup lang="ts">
const props = defineProps<{
    seatsAvailable: number,
    seatsTotal: number,
    departureDate: string,
    planetName: string,
    description: string,
}>();
</script>

<template>
<div class="tour-card">
    <div class="tour-card__progress-bar">
        <div class="tour-card__progress-bar-value" :style="`width: ${seatsAvailable / seatsTotal * 100}%`"></div>
    </div>
    <div class="tour-card__header">
        <span class="tour-card__seats">{{ seatsAvailable }} мест осталось из {{ seatsTotal }}</span>
        <span class="tour-card__date">{{ departureDate }}</span>
    </div>
    <h2>{{ planetName }}</h2>
    <span>{{ description }}</span>
    <button class="tour-card__button">Купить билет -></button>
</div>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap')

$dark: #0b0c12
$dust: #23273A
$vega: #2DA5F1
$leaf: #CCEB40
$fire: #ff9900
$nebula-gradient: linear-gradient(45deg, $vega 0%, $vega 10%, $leaf 40%, $leaf 70%, $fire 100%)

*
    font-family: "Victor Mono", sans-serif
    color: white

.tour-card
    padding-inline: 1em
    padding-block: 2em
    display: flex
    align-items: flex-start
    justify-content: space-between
    flex-direction: column
    background: transparentize($dust, 0.50)
    backdrop-filter: blur(10px)
    border-radius: 0.25em
    row-gap: 0.5em
    
.tour-card__progress-bar
    align-self: stretch
    height: 1px
    background: $dark
    
.tour-card__progress-bar-value
    height: 100%
    background: $nebula-gradient
    width: 45%
    
.tour-card__header
    display: flex
    align-items: center
    justify-content: space-between
    opacity: 0.2
    text-transform: uppercase
    letter-spacing: 0.06125em
    font-weight: 100
    align-self: stretch
    
h2
    margin-bottom: 0.5em
    font-style: italic
    
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
    align-self: flex-end
    
button:hover
    filter: drop-shadow((-$button-shadow-dispersion) (-$button-shadow-dispersion) $button-shadow-radius transparentize($vega, 0)) drop-shadow(0 0 $button-shadow-radius transparentize($leaf, $button-shadow-intensity)) drop-shadow($button-shadow-dispersion $button-shadow-dispersion $button-shadow-radius transparentize($fire, $button-shadow-intensity))
    transition: 350ms cubic-bezier(.68,.32,.27,.96)

button:active
    transition: 50ms cubic-bezier(.68,.32,.27,.96)
    filter: drop-shadow((-$button-shadow-dispersion *.25) (-$button-shadow-dispersion *.25) ($button-shadow-radius *.25) transparentize($vega, 0.2)) drop-shadow(0 0 ($button-shadow-radius *.25) transparentize($leaf, 0.2)) drop-shadow(($button-shadow-dispersion *.25) ($button-shadow-dispersion *.25) ($button-shadow-radius *.25) transparentize($fire, 0.8))

</style>