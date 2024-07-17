<script setup lang="ts">

</script>

<template>
    <svg class="wind-power-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.68 49.09">
        <polygon class="cls-1" points="28.34 7.85 56.68 0 35.71 20.62 28.34 49.09 20.97 20.62 0 0 28.34 7.85"/>
    </svg>
</template>

<style scoped lang="sass">
.cls-1
    fill: #fcfcf9
    stroke-width: 0

.wind-power-icon
    width: 2em
    animation: wind-power-icon__twist 60000ms ease-in-out infinite
    transform-origin: 50% 40%
    
@keyframes wind-power-icon__twist
    0%
        rotate: 0turn
        
    100%
        rotate: 6turn
</style>