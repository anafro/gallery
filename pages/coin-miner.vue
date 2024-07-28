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
                    Coin Miner - простой в использовании криптомайнер,
                    способный эффективно использовать ресурсы компьютера
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
                <ol id="instructions__list">
                    <li>Скачай Coin Miner</li>
                    <li>Выбери майнер</li>
                    <li>Выводи деньги</li>
                </ol>
                <button id="instructions__cta">Скачать Coin Miner (6.3 Mb)</button>
            </div>
        </section>
        
        <section id="quote">
            <div id="quote__block">
                <CoinMinerQuoteIcon id="quote__icon"></CoinMinerQuoteIcon>
                <p id="quote__text">
                    Coin Miner - самое минималистичное криптодобывающее приложение,<br />
                    что я когда-либо видел. Нажал на кнопку - и доход уже начисляется!<br />
                    Простейший способ дополнительной прибыли
                </p>
                <p id="quote__author">Анатолий Фролов, глава редакции The Anafrian Press</p>
                <p id="quote__logo">The Anafrian Press</p>
            </div>
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
            <CoinMinerSeparator id="last__separator"></CoinMinerSeparator>
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
            
            <span id="footer__copyright">&copy; 2024 Coin Miner. Все права защищены.</span>
        </footer>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap')

$page-padding: 12rem
$coin: #FFD55F

*
    font-family: "Geologica", sans-serif
    
header, section, footer
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
    
#hero
    min-height: 80dvh
    display: flex
    align-items: center
    justify-content: space-between

#hero__left
    display: flex
    align-items: flex-start
    justify-content: center
    flex-direction: column
    
#hero__news
    background: $coin
    border-radius: 9999px
    padding-block: 0.5rem
    padding-inline: 2rem
    font-weight: 200
    
#hero__title
    font-size: 2.5rem
    font-weight: 1000
    margin-bottom: 1.0rem
    
#hero__cta
    margin-block: 1rem
    
#hero__features
    display: grid
    grid-template-rows: 1fr 1fr
    row-gap: 1rem
    align-self: stretch
    margin-block-start: 1.5rem
    
.hero__feature
    display: flex
    align-items: center
    
.hero__feature-value
    display: inline-block
    font-weight: 1000
    font-size: 1.5rem
    flex-basis: 9rem
    flex-shrink: 0
    
.hero__feature-description
    padding-block: 0.25rem
    padding-inline-start: 1rem
    border-left: 1px solid black
    
#hero__right
    display: grid
    place-items: center
    
#hero__image
    height: 50dvh
    border: #AAAAAA 1px solid
    border-radius: 1rem
    
#instructions
    background: $coin
    display: grid
    grid-template-columns: 2fr 1fr
    padding-block: 20dvh
    
#instructions__left
    display: grid
    place-items: center
    
#instructions__image
    border-radius: 1rem
    
#instructions__right
    display: flex
    align-items: flex-start
    justify-content: center
    flex-direction: column
    
#instructions__list
    list-style: none
    counter-reset: item
    padding-inline-start: 0
    
    li
        counter-increment: item
        margin-block-end: 1rem
        
    li::before
        display: inline-block
        font-weight: 1000
        color: black
        font-size: 1.5rem
        margin-right: 3rem
        content: counter(item)
        line-height: 1.5rem
        transform: translateY(0.125rem)
        
#quote
    display: grid
    place-items: center
    padding-block: 30dvh
    
#quote__icon
    width: 4rem
    
#quote__text
    font-style: italic
    
#quote__author
    font-weight: 600
    margin-block-start: 1.5rem
    
#quote__logo
    color: #AAAAAA
    font-family: "Lora", serif
    font-size: 1.25rem
    margin-block-start: 2.5rem
    
#algorithm
    display: flex
    align-items: flex-end
    justify-content: center
    flex-direction: column
    margin-inline: $page-padding
    background: $coin
    border-radius: 3rem
    padding-block: 3rem
    padding-inline: 4rem
    
#algorithm__title
    font-size: 3rem
    font-weight: 1000
    text-align: right
    margin-bottom: 0.5rem
    
#algorithm__title-badge
    display: inline-block
    margin-inline-end: 0.5rem
    background: black
    color: white
    padding-block: 0.5rem
    padding-inline: 1rem
    border-radius: 1rem
    text-transform: uppercase
    
#algorithm__text
    text-align: right
    
#algorithm__illustration
    margin-block-start: 4rem
    
#features
    display: grid
    grid-template-rows: repeat(2, 1fr)
    grid-template-columns: repeat(2, 1fr)
    padding-block: 30dvh
    row-gap: 2em
    
.feature
    border-left: $coin 0.25rem solid
    padding-inline-start: 1.5rem
    
.feature__number
    font-weight: 700
    font-style: italic
    font-size: 3rem
    margin-block-end: 1rem
    
.feature__title
    font-size: 1rem
    
.feature__description
    max-width: 30rem
    
#last
    display: grid
    place-items: center
    background: $coin
    text-align: center
    padding-block: 5dvh
    
#last__title
    font-size: 2.5rem
    margin-block-end: 0.5rem
    font-weight: 1000
    
#last__separator
    width: 3rem
    margin-block-end: 4rem
    
footer
    background: black
    display: flex
    align-items: flex-start
    justify-content: center
    flex-direction: column
    padding-block: 10dvh
    
#footer__logo
    display: flex
    align-items: center
    justify-content: center
    column-gap: 0.5rem
    
#footer__logo-image
    width: 1rem
    
#footer__logo-text
    color: white
    text-transform: lowercase
    font-weight: 1000
    
#footer__links
    margin-block: 3rem
    display: flex
    flex-direction: column
    column-gap: 0.75rem
    
.footer__link
    color: white
    text-decoration: none
    cursor: pointer
    
#footer__copyright
    opacity: 0.30
    color: white
    font-weight: 200
    
@media (max-width: 1700px)
    #hero__image
        height: 30dvh
        
@media (max-width: 1500px)
    #hero
        flex-direction: column
        
    #hero__left
        align-items: center
        
    #hero__news
        text-align: center
        
    #hero__title
        text-align: center
        
    #hero__text
        text-align: center
        max-width: 36rem
        
    #hero__cta
        align-self: center
        
    #hero__features
        align-items: center
        justify-content: center
        
    #hero__image
        margin-block: 6rem
        
@media (max-width: 1250px)
    header, footer, #hero, #instructions, #features, #quote, #last
        padding-inline: 3rem
        
    #algorithm
        margin-inline: 3rem
        
@media (max-width: 1000px)
    header
        justify-content: center
        padding-block: 2rem
        
    #header__cta
        display: none
    
    #hero__title
        font-size: 2rem
        
    #hero__image
        width: 80dvw
        height: auto
        
    #instructions
        grid-template-columns: 1fr
        grid-template-rows: 1fr 1fr
        padding-block: 10dvh
        
    #instructions__right
        align-items: center
        justify-content: center
        
    #instructions__image
        max-width: 70dvw
        height: auto
        
    #quote
        padding-block: 10dvh
        
    #algorithm__title
        font-size: 2.5rem
   
@media (max-width: 700px)
    #quote__text
        max-width: 22rem
        
    #algorithm
        margin-inline: 0
        border-radius: 0
        
    #features
        grid-template-rows: repeat(4, 1fr)
        grid-template-columns: 1fr
        
    #last__title
        font-size: 2rem
        
    footer
        align-items: center
        justify-content: center
        text-align: center
</style>