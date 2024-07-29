<script setup lang="ts">

import GalleryPageTemplate from "~/components/templates/GalleryPageTemplate.vue";
import XareLogo from "~/components/xare/XareLogo.vue";
import XareHologramLogo from "~/components/xare/XareHologramLogo.vue";
import XareHologramNetscan from "~/components/xare/XareHologramNetscan.vue";
import XareGreenLogo from "~/components/xare/XareGreenLogo.vue";
</script>

<template>
    <GalleryPageTemplate>
        <div id="xare">
            
            <header>
                <a href="#" id="header__logo">
                    <XareLogo id="header__logo-image"></XareLogo>
                    <span id="header__logo-text">Xare Security <span id="header__logo-text-thin">70000</span></span>
                </a>
                
                <aside id="header__menu">
                    <a href="#" class="header__menu-link">Достоинства</a>
                    <a href="#" class="header__menu-link">Стоимость</a>
                    <a href="#" class="header__menu-link">Ресурсы</a>
                    <a href="#" class="header__menu-link">Курсы</a>
                </aside>
                
                <button id="header__cta">Попробовать Xare</button>
            </header>
            
            <section id="hero">
                <div id="hero__logo">
                    <XareLogo id="hero__logo-image"></XareLogo>
                </div>
                <h1 id="hero__title">
                    Доверьте Xare<br />
                    защиту устройства
                </h1>
                <p id="hero__text">
                    Ваши данные под надёжной защитой Xare. Мы обновляем базу данных антивирусов,
                    улучшаем алгоритмы поиска вредоностных программ и усиливаем защиту,
                    чтобы Ваше прибывание в Интернете было безопасным и комфортным.
                </p>
                <button id="hero__cta">Скачать антивирус Xare Security 70000</button>
            </section>
            
            <section id="companies">
                <span class="company" id="company__airdnd">AirDnD</span>
                <span class="company" id="company__the-anafrian-press">The Anafrian Press</span>
                <span class="company" id="company__micorsoft">Micorsoft</span>
            </section>
            
            <section id="details">
                <div id="details__content">
                    <h2 id="details__title">
                        Xare Secutiry 70000 построен так,
                        чтобы незаметно выстраивать
                        безопасную, защищённую среду,
                        чтобы Вы не отвлекались
                        на настройки брандмауеров
                        и антивирусных сканеров!
                    </h2>
                    <p id="details__text">
                        Ежедневно появляются сотни новых вредоностных программ,
                        готовых украсть Ваши данные, но Xare о них уже знает
                        и готов их обнаружить и обезвредить. Ещё он может
                        отслеживать подозрительные Интернет-соединения
                        и разрывать их, если они несут в себе угрозу.
                    </p>
                </div>
                <div id="details__features">
                    <div class="details__feature">
                        <XareHologramLogo class="details__feature-icon"></XareHologramLogo>
                        <span class="details__feature-description">
                        <strong>Защита в реальном времени.</strong>
                        Если Xare обнаружит вирус, он сразу его уничтожит
                    </span>
                    </div>
                    
                    <div class="details__feature">
                        <XareHologramCheckmark class="details__feature-icon"></XareHologramCheckmark>
                        <span class="details__feature-description">
                        <strong>Высокий уровень защиты.</strong>
                        Нам известно, как бороться с 18 миллионами видов вирусов
                    </span>
                    </div>
                    
                    <div class="details__feature">
                        <XareHologramSwitch class="details__feature-icon"></XareHologramSwitch>
                        <span class="details__feature-description">
                        <strong>Тонкая настройка.</strong>
                        Xare можно настраивать на определённые папки или время работы
                    </span>
                    </div>
                </div>
            </section>
            
            <section id="downloads">
                <XareHologramCheckmark id="downloads__icon"></XareHologramCheckmark>
                <h2 id="downloads__title">Нам доверяют миллионы людей</h2>
                <p id="downloads__text">
                    Xare уже установили 90 миллионов раз, и его популярность
                    продолжает расти. Это неудивительно, ведь Xare номинирован
                    на лучшую антивирусную программу 2024 года.
                </p>
            </section>
            
            <section id="features">
                <div class="feature">
                    <XareHologramLogo class="feature__icon"></XareHologramLogo>
                    <h2 class="feature__title">Xare <span class="feature__title-thin">Realtime</span></h2>
                    <p class="feature__description">Постоянно ищет угрозы в режиме реального времени</p>
                </div>
                
                <div class="feature">
                    <XareHologramFilecheck class="feature__icon"></XareHologramFilecheck>
                    <h2 class="feature__title">Xare <span class="feature__title-thin">Filecheck</span></h2>
                    <p class="feature__description">Утилита для глубого анализа файлов или директорий</p>
                </div>
                
                <div class="feature">
                    <XareHologramNetscan class="feature__icon"></XareHologramNetscan>
                    <h2 class="feature__title">Xare <span class="feature__title-thin">Netscan</span></h2>
                    <p class="feature__description">Анализирует Интернет-соединения и предотвращает кибератаки</p>
                </div>
            </section>
            
            <section id="last">
                <div id="last__content">
                    <h2 id="last__title"><span id="last__title-opacity">Готовы попробовать </span>Xare?</h2>
                    <button id="last__cta">Скачать Xare Security 70000</button>
                </div>

                <div id="last__icon-circle">
                    <XareGreenLogo id="last__icon"></XareGreenLogo>
                </div>
            </section>
            
            <footer>
                <XareFooterIllustration id="footer__illustration"></XareFooterIllustration>

                <div id="footer__block">
                    <div id="footer__content">
                        <div id="footer__company">
                            <a href="#" id="footer__logo">
                                <XareLogo id="footer__logo-image"></XareLogo>
                                <span id="footer__logo-text">Xare Security <span id="footer__logo-text-thin">70000</span></span>
                            </a>
                        </div>

                        <span id="footer__copyright">&copy; 2024 Xare Security Ltd. Все права защищены.</span>
                    </div>

                    <aside class="footer__menu-bar">
                        <a href="#" class="footer__menu-bar-item">Достоинства</a>
                        <a href="#" class="footer__menu-bar-item">Стоимость</a>
                        <a href="#" class="footer__menu-bar-item">Ресурсы</a>
                        <a href="#" class="footer__menu-bar-item">Курсы</a>
                    </aside>

                    <aside class="footer__menu-bar">
                        <a href="#" class="footer__menu-bar-item">Realtime</a>
                        <a href="#" class="footer__menu-bar-item">Filecheck</a>
                        <a href="#" class="footer__menu-bar-item">Netscan</a>
                    </aside>

                    <aside class="footer__menu-bar">
                        <a @click="navigateTo('/')" class="footer__menu-bar-item">Вернуться в Галерею</a>
                    </aside>
                </div>
            </footer>
        </div>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap')

$depth: #00051B
$latte: #FBF8F3
$coffee: #F8F1E9
$mint: #86F9B8
$safety: #0E33FE

$page-padding: 12rem

*
    font-family: "Inter Tight", "Inter", sans-serif
    color: $depth
    
*::selection
    background: $safety
    color: darken($safety, 30%)
    
#xare
    background: $latte
    
header, section, footer
    padding-inline: $page-padding
    
header
    display: flex
    align-items: center
    justify-content: space-between
    padding-block: 2rem
    
button
    background: $mint
    color: $depth
    padding-block: 0.25rem
    padding-inline: 0.75rem
    border-radius: 9999px
    font-size: 1rem
    border: none
    cursor: pointer

#header__logo
    display: flex
    align-items: center
    justify-content: center
    column-gap: 0.5rem
    text-decoration: none

#header__logo-image
    width: 1rem
    
#header__logo-text
    font-weight: 1000
    
#header__logo-text-thin
    font-weight: 200
    
#header__menu
    display: flex
    column-gap: 3rem
    
.header__menu-link
    text-decoration: none
    
#hero
    padding-inline: 0
    margin-inline: $page-padding
    background: radial-gradient(ellipse farthest-corner at 50% 20%, mix($safety, white, 30%) 0%, white 30%, white 100%)
    min-height: 80dvh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    border-radius: 1rem
    filter: drop-shadow(0.125rem 0.25rem 0.5rem transparentize(black, 0.90))
    
#hero__logo
    width: 9rem
    aspect-ratio: 1 / 1
    border-radius: 2rem
    background: white
    display: grid
    place-items: center
    filter: drop-shadow(0.125rem 0.25rem 0.5rem transparentize(black, 0.90))
    
#hero__title
    font-weight: 1000
    font-size: 3rem
    text-align: center
    margin-bottom: 0.5rem
    line-height: 1em
    
#hero__text
    text-align: center
    width: 36rem
    
#hero__logo-image
    width: 70%
    
#companies
    display: flex
    align-items: center
    justify-content: center
    column-gap: 3rem
    padding-block: 8dvh
    
    > *
        color: #AAAAAA
        font-size: 1.5rem
        
#company__airdnd
    font-weight: 600
    
#company__the-anafrian-press
    font-family: "Lora", serif
    
#company__micorsoft
    font-weight: 200
    
#details
    padding-block: 10dvh
    display: flex
    align-items: center
    justify-content: space-between
    
#details__content
    flex: 1
    
#details__title
    font-size: 1.5rem
    width: 30rem
    
#details__text
    width: 36rem
    font-weight: 300
    
#details__features
    background: white
    padding: 2rem
    border-radius: 1rem
    filter: drop-shadow(0.125rem 0.25rem 0.5rem transparentize(black, 0.90))
    display: flex
    align-items: flex-start
    justify-content: center
    flex-direction: column
    row-gap: 4rem
    
.details__feature
    display: flex
    align-items: center
    justify-content: center
    column-gap: 2rem

.details__feature-icon
    width: 3rem
    height: auto

.details__feature-description
    width: 24rem

#downloads
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    background: $coffee
    padding: 3rem
    margin-inline: $page-padding
    border-radius: 1rem
    text-align: center

#downloads__icon
    width: 3rem

#downloads__title
    margin-bottom: 1rem

#downloads__text
    width: 24rem

#features
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: 6rem
    margin-block: 10dvh

.feature
    background: white
    filter: drop-shadow(0.125rem 0.25rem 0.5rem transparentize(black, 0.90))
    border-radius: 1rem
    padding-inline: 2rem
    padding-block: 3rem

.feature__icon
    margin-bottom: 6rem
    height: 3rem

.feature__title
    margin-bottom: 1rem
    font-size: 1.5rem

.feature__title-thin
    font-weight: 200

#last
    padding: 4rem
    margin-inline: $page-padding
    background: $depth
    display: flex
    align-items: center
    justify-content: space-between
    border-radius: 1rem
    margin-block: 10dvh

#last__content
    display: flex
    align-items: flex-start
    justify-content: center

#last__title
    font-weight: 500
    color: $mint
    font-size: 2rem
    margin: 0

#last__title-opacity
    color: transparentize($mint, 0.70)

#last__icon
    width: 95%
    transform: translateY(10%)

#last__icon-circle
    background: transparentize($mint, 0.70)
    padding: 2rem
    border-radius: 9999px
    height: 6rem
    width: 6rem
    display: grid
    place-items: center

#last__content
    display: flex
    flex-direction: column
    row-gap: 1.5rem

footer
    position: relative
    background: $safety
    padding-block: 6rem

#footer__block
    border-radius: 1rem
    background: white
    padding-block: 4rem
    padding-inline: 4rem
    display: grid
    grid-template-columns: 2fr repeat(3, 1fr)
    min-height: 36rem

#footer__content
    display: flex
    align-items: flex-start
    justify-content: space-between
    flex-direction: column

.footer__menu-bar
    display: flex
    flex-direction: column
    row-gap: 0.5rem

#footer__logo
    display: flex
    align-items: center
    justify-content: center
    column-gap: 0.5rem
    text-decoration: none

#footer__logo-image
    width: 1rem

#footer__logo-text
    font-weight: 1000

#footer__logo-text-thin
    font-weight: 200

#footer__illustration
    position: absolute
    top: -3rem
    right: 5rem
    width: 16rem
    height: auto
</style>