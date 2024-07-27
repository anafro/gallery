<script setup lang="ts">

import GalleryPageTemplate from "~/components/templates/GalleryPageTemplate.vue";
import CoinMinerQuoteIcon from "~/components/coin-miner/CoinMinerQuoteIcon.vue";
import CoinMinerBarsIllustration from "~/components/coin-miner/CoinMinerBarsIllustration.vue";
import CoinMinerSeparator from "~/components/coin-miner/CoinMinerSeparator.vue";
import CoinMinerWhiteLogo from "~/components/coin-miner/CoinMinerWhiteLogo.vue";
</script>

<template>
    <GalleryPageTemplate>
        <header>
            <a href="#" id="logo">
                <CoinMinerLogo id="logo__image"></CoinMinerLogo>
                <span id="logo__text">Coin Miner</span>
            </a>
            
            <button id="header__cta">Скачать Coin Miner</button>
        </header>
        
        <section id="hero">
            <div id="hero__left">
                <h3 id="hero__news">Coin Miner v9 Turbo - добыча быстрее на 19%!</h3>
                <h1 id="hero__title">
                    Твой копмьютер тоже<br />
                    может майнить крипту!
                </h1>
                <p id="hero__text">
                    Coin Miner - простой в использовании криптомайнер,<br />
                    способный эффективно использовать ресурсы компьютера<br />
                    и зарабатывать криптовалюту!
                </p>
                <button id="hero__cta">Скачать Coin Miner (6.3 Mb)</button>
                
                <div id="hero__features">
                    <div class="hero__feature">
                        <span class="hero__feature-value">8 051 р / ч</span>
                        <span class="hero__feature-description">
                        Средняя скорость<br />
                        добычи на стандартном<br />
                        компьютере
                    </span>
                    </div>
                    <div class="hero__feature">
                        <span class="hero__feature-value">+86-93%</span>
                        <span class="hero__feature-description">
                        Вдвое больше прибыли,<br />
                        благодаря особым<br />
                        добывающим алгоритмам
                    </span>
                    </div>
                </div>
            </div>
            <div id="hero__right">
                <img id="hero__image" src="/coin-miner/dashboard.png" alt="Image Not Found">
            </div>
        </section>
        
        <section id="instructions">
            <div id="instructions__left">
                <img src="/coin-miner/income.png" alt="Image Not Found" id="instructions__image">
            </div>
            
            <div id="instructions__right">
                <ol>
                    <li>Скачай Coin Miner</li>
                    <li>Выбери майнер</li>
                    <li>Выводи деньги</li>
                </ol>
                <button id="instructions__cta">Скачать Coin Miner (6.3 Mb)</button>
            </div>
        </section>
        
        <section id="quote">
            <CoinMinerQuoteIcon id="quote__icon"></CoinMinerQuoteIcon>
            <p id="quote__text">
                Coin Miner - самое минималистичное криптодобывающее приложение,<br />
                что я когда-либо видел. Нажал на кнопку - и доход уже начисляется!<br />
                Простейший способ дополнительной прибыли
            </p>
            <p id="quote__author">Анатолий Фролов, глава редакции The Anafrian Press</p>
            <p id="quote__logo">The Anafrian Press</p>
        </section>
        
        <section id="algorithm">
            <h2 id="algorithm__title">
                <span id="algorithm__title-badge">Wow</span>
                Секретный алгоритм добычи
            </h2>
            <p id="algorithm__text">
                Coin Miner будет использовать<br />
                только незанятые ресурсы компьютера!<br />
                Так он вообще не тормозит систему,<br />
                сохраняя огромную скорость добычи!
            </p>
            <button id="algorithm__cta">Скачать Coin Miner (6.3 Mb)</button>
            
            <CoinMinerBarsIllustration id="algorithm__illustration"></CoinMinerBarsIllustration>
        </section>
        
        <section id="features">
            <div class="feature">
                <div class="feature__number">1</div>
                <h3 class="feature__title">Не надо настраивать</h3>
                <p class="feature__description">
                    Майнер сам поймёт, как лучше использовать
                    ресурсы компьютера, чтобы зарабатывать максимум!
                </p>
            </div>
            <div class="feature">
                <div class="feature__number">2</div>
                <h3 class="feature__title">Моментальный вывод</h3>
                <p class="feature__description">
                    Отправим заработок без комиссии на карту,
                    телефон или кошелёк за несколько минут!
                </p>
            </div>
            <div class="feature">
                <div class="feature__number">3</div>
                <h3 class="feature__title">Огромная скорость добычи</h3>
                <p class="feature__description">
                    Даже самый слабый компьютер сможет зарабатывать
                    от 1 000 рублей в час!
                </p>
            </div>
            <div class="feature">
                <div class="feature__number">4</div>
                <h3 class="feature__title">Пассивный доход 24 / 7</h3>
                <p class="feature__description">
                    Пусть компьютер не простаивает без дела -
                    он сможет добывать крипту для вас всё время!
                </p>
            </div>
        </section>
        
        <section id="last">
            <h2 id="last__title">Присоединяйся к добыче крипты!</h2>
            <p id="last__text">Просто попробуй :)</p>
            <CoinMinerSeparator></CoinMinerSeparator>
            <button id="last__cta">Скачать Coin Miner (6.3 Mb)</button>
        </section>
        
        <footer>
            <div id="footer__logo">
                <CoinMinerWhiteLogo id="footer__logo-image"></CoinMinerWhiteLogo>
                <span id="footer__logo-text">Coin Miner</span>
            </div>
            
            <aside id="footer__links">
                <a href="#" class="footer__link">Скачать Coin Miner</a>
                <a @click="navigateTo('/')" class="footer__link">Вернуться в Галерею</a>
            </aside>
            
            <span id="footer_copyright">&copy; 2024 Coin Miner. Все права защищены.</span>
        </footer>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap')

$page-padding: 12rem

*
    font-family: "Geologica", sans-serif
    
header, section
    box-sizing: border-box
    padding-inline: $page-padding
    
header
    display: flex
    align-items: center
    justify-content: space-between
    padding-block: 1rem
    
button
    background: black
    color: white
    padding-block: 0.5rem
    padding-inline: 1rem
    border-radius: 0.5rem
    cursor: pointer
    font-size: 1rem
    border: none
    transition: opacity 30ms ease-out
    
    &:hover
        opacity: 0.85
        
    &:active
        opacity: 0.70
    
#logo
    display: flex
    align-items: center
    justify-content: center
    column-gap: 0.25rem
    color: black
    text-decoration: none
    
#logo__image
    width: 1rem
    
#logo__text
    font-weight: 1000
    text-transform: lowercase
</style>