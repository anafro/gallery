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
                    <a href="#" id="header__menu-link">Достоинства</a>
                    <a href="#" id="header__menu-link">Стоимость</a>
                    <a href="#" id="header__menu-link">Ресурсы</a>
                    <a href="#" id="header__menu-link">Курсы</a>
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
                    <h2 id="last__title">Готовы попробовать Xare?</h2>
                    <button id="last__cta">Скачать Xare Security 70000</button>
                </div>
                
                <XareGreenLogo id="last__icon"></XareGreenLogo>
            </section>
            
            <footer>
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
            </footer>
        </div>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap')

$depth: #00051B
$latte: #FBF8F3
$mint: #86F9B8
$safety: #0E33FE

*
    font-family: "Inter Tight", "Inter", sans-serif
    

</style>