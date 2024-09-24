<script setup lang="ts">

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryPageTemplate from "~/components/templates/GalleryPageTemplate.vue";
import PlayIcon from "~/components/shifjuchkin-studio/PlayIcon.vue";
import CrownIcon from "~/components/shifjuchkin-studio/CrownIcon.vue";
import GlobeIcon from "~/components/shifjuchkin-studio/GlobeIcon.vue";
import ArrowIcon from "~/components/shifjuchkin-studio/ArrowIcon.vue";
import StarIcon from "~/components/shifjuchkin-studio/StarIcon.vue";

onMounted((): void => {
    const cursor: HTMLElement | null = document.getElementById('cursor');

    window.addEventListener('mousemove', (event) => {
        if (cursor) {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".project__topic-pill", {
        onEnter: targets => gsap.from(targets, {
            x: -30,
            opacity: 0,
            duration: 0.575,
            stagger: 0.100,
        }),
    });

    gsap.to("#hero__image", {
        backgroundPositionX: 60,
        backgroundPositionY: 100,
        scrollTrigger: {
            trigger: "#hero__image",
            scrub: true,
        }
    });

    gsap.utils.toArray(".project__tile").forEach(tile => {
        gsap.to(tile as HTMLElement, {
            duration: 0.575,
            stagger: 0.100,
            backgroundPositionX: 50,
            backgroundPositionY: 50,
            scrollTrigger: {
                scrub: true,
                trigger: tile,
            }
        });
    });
});
</script>

<template>
<GalleryPageTemplate>
    <div id="shfch-studio">
        <div id="cursor"></div>

        <header>
            <a href="#" id="header__logo">Студия Шифьючьева</a>

            <aside id="header__link-tray">
                <a href="#" class="header__link">Обо мне</a>
                <a href="#" class="header__link">Сервисы</a>
                <a href="#" class="header__link">Проекты</a>
                <a href="#" class="header__link">Контакты</a>
            </aside>
        </header>

        <section id="hero">
            <p id="hero__heading-text-decoration">#CFF73E</p>
            <h1 id="hero__heading">
                <span class="hero__heading-line">Зацифруй</span>
                <span class="hero__heading-line">
                    идеи
                    <span id="hero__heading-pill">
                        <span id="hero__heading-pill-play">
                            <PlayIcon id="hero__heading-pill-play-icon"></PlayIcon>
                        </span>
                    </span>
                </span>
            </h1>

            <div id="hero__award-tray">
                <div class="hero__award">
                    <CrownIcon class="hero__award-icon"></CrownIcon>
                    <span class="hero__award-name">2019 CSS Warriors</span>
                </div>

                <div class="hero__award">
                    <GlobeIcon class="hero__award-icon"></GlobeIcon>
                    <span class="hero__award-name">2023 Toronto Web Conf</span>
                </div>
            </div>

            <div id="hero__image">
                <div id="hero__image-arrow">
                    <ArrowIcon id="hero__image-arrow-icon"></ArrowIcon>
                </div>
            </div>
        </section>

        <section id="ticker">
            <div class="ticker__fragment" v-for="_ in 8">
                <span class="ticker__moto">Воплоти свои идеи в реальность</span>
                <StarIcon class="ticker__star-icon"></StarIcon>
            </div>
        </section>

        <section id="services">
            <div id="services__header">
                <h2 id="services__heading">
                    Мои услуги
                    <span id="services__heading-circle"></span>
                </h2>

                <div id="services__service-pill-tray">
                    <div class="services__service-pill" v-for="serviceName in ['Дизайн', 'Сайты', 'Цифровой маркетинг', 'SEO']">
                        <GlobeIcon class="services__service-pill-icon"></GlobeIcon>
                        <span class="services__service-pill-name">{{ serviceName }}</span>
                    </div>
                </div>
            </div>

            <p id="services__description">
                Каждому человеку и каждой компании хочется чего-то своего.
                Поэтому исследуйте спектр моих возможностей,
                чтобы найдите то, что вам по душе
            </p>

            <div id="services__stars">
                <StarIcon class="services__star-icon" v-for="_ in 3"></StarIcon>
            </div>

            <div id="services__service-list">
                <div class="services__service" v-for="serviceName in ['Разработка сайтов', 'Web-дизайн', 'Брендирование', 'SEO']">
                    <span class="services__service-name">{{ serviceName }}</span>
                    <span class="services__service-circle"></span>
                    <ArrowIcon class="services__service-icon"></ArrowIcon>
                </div>
            </div>
        </section>

        <section id="quote">
            <div id="quote__block">
                <div class="quote__line">
                    <div class="quote__text">Креативные люди</div>
                    <div class="quote__pill" data-index="A1"></div>
                </div>

                <div class="quote__line">
                    <div class="quote__pill" data-index="B1"></div>
                    <div class="quote__text">Знают, что делать,</div>
                </div>

                <div class="quote__line">
                    <div class="quote__text">Как делать</div>
                    <div class="quote__pill" data-index="C1"></div>
                    <div class="quote__text">И</div>
                    <div class="quote__pill" data-index="C2"></div>
                </div>

                <div class="quote__line">
                    <div class="quote__pill" data-index="D1"></div>
                    <div class="quote__text">Когда делать</div>
                    <div class="quote__pill" data-index="D2"></div>
                </div>
            </div>
        </section>

        <section id="project">
            <div id="project__header">
                <h2 id="project__heading">
                    Проект года
                    <span id="project__heading-circle"></span>
                </h2>

                <span id="project__description">
                    Вкладывая любовь в проекты,
                    они обретают смысл и силу
                </span>
            </div>

            <div id="project__topic-pill-tray">
                <div class="project__topic-pill" v-for="serviceName in ['Дизайн', 'Сайты', 'Цифровой маркетинг', 'SEO']">
                    <GlobeIcon class="project__topic-pill-icon"></GlobeIcon>
                    <span class="project__topic-pill-name">{{ serviceName }}</span>
                </div>
            </div>

            <div id="project__tiles">
                <div class="project__tile"></div>
                <div class="project__tile"></div>
                <div class="project__tile"></div>
                <div class="project__tile"></div>
                <div class="project__tile">

                    <div id="project__project-tile">
                        <div id="project__tile-arrow">
                            <ArrowIcon id="project__tile-arrow-icon"></ArrowIcon>
                        </div>

                        <span id="project__project-tile-year">2024</span>
                        <h3 id="project__project-tile-name">Ecopulse Energy</h3>
                    </div>
                </div>
            </div>
        </section>

        <section id="last">
            <div id="last__block">
                <div id="last__stars">
                    <StarIcon class="last__star-icon" v-for="_ in 3"></StarIcon>
                </div>

                <h2 id="last__heading">Обсудим ваши идеи?</h2>

                <div id="last__button-tray">
                    <button class="last__button last__button--primary">Связаться сейчас</button>
                    <button class="last__button last__button--secondary">Подписаться на соцсети</button>
                </div>
            </div>
        </section>

        <footer>
            <span id="footer__logo">Студия Шифьючьева</span>

            <div id="footer__link-tray">
                <a href="#" class="footer__link">Политика конф.</a>
                <span class="footer__copyright">2024 SHVCH. Все права защищены</span>
                <NuxtLink href="/" class="footer__link">Обратно в галерею</NuxtLink>
            </div>
        </footer>
    </div>
</GalleryPageTemplate>
</template>

<style scoped lang="sass">
$tennis: #CFF73E
$salad: #B9E02B
$light: #C3C3C3
$smoke: #999999
$gray: #4D4D4D
$coal: #292929
$dark: #171717
$black: #000000
$border-radius: 10rem

*::selection
    background: $black
    color: $tennis

*, *::before, *::after
    font-family: "Halvar Breit", sans-serif
    font-weight: 400
    box-sizing: border-box
    margin: 0

a
    text-decoration: none

h1, h2, h3, h4, h5, h6
    text-transform: uppercase

header, section, footer
    padding-inline: 6rem

header
    background: $tennis
    display: flex
    align-items: center
    justify-content: space-between
    padding-block: 2rem

button, a
    cursor: pointer

#shfch-studio
    cursor: none

#cursor
    position: fixed
    transform: translateX(-50%) translateY(-50%)
    width: 1rem
    aspect-ratio: 1
    border: $dark 2px solid
    background: $tennis
    border-radius: 10000px
    z-index: 10000
    pointer-events: none

#header__logo
    color: $black
    font-weight: 500

#header__link-tray
    display: flex
    column-gap: 4rem

.header__link
    color: black

#hero
    background: $tennis
    padding-top: 4rem

#hero__heading-text-decoration
    font-weight: 200

#hero__heading
    font-size: 12rem
    display: flex
    flex-direction: column
    line-height: 1em

.hero__heading-line
    font-weight: 1000
    display: flex
    column-gap: 2rem
    align-items: center
    justify-content: stretch

#hero__heading-pill
    border-radius: 10000px
    background-image: url("/shifjuchkin-studio/images/hero-pill.jpg")
    display: inline-flex
    flex-grow: 1

#hero__heading-pill-play
    background: $black
    border-radius: 10000px
    height: 0.8em
    aspect-ratio: 1
    display: grid
    place-items: center

#hero__heading-pill-play-icon
    height: 50%
    aspect-ratio: 1
    transform: translateX(+10%)

#hero__award-tray
    display: flex
    column-gap: 1rem
    margin-block-start: 4rem

.hero__award
    padding: 0.5rem 1.5rem
    border: 2px solid $black
    border-radius: 10000px
    display: flex
    align-items: center
    justify-content: center
    column-gap: 1rem
    font-size: 2rem

.hero__award-icon
    width: 1em
    aspect-ratio: 1

.hero__award-name
    font-weight: 300

#hero__image
    position: relative
    background-image: url("/shifjuchkin-studio/images/hero.jpg")
    border-top-left-radius: $border-radius
    border-top-right-radius: $border-radius
    height: 75lvh
    margin-block-start: 4rem
    background-position-y: 70%

#hero__image-arrow
    position: absolute
    right: $border-radius + 1rem
    top: -4rem
    background: $black
    display: grid
    place-items: center
    padding: 3rem
    border-radius: 10000px

#hero__image-arrow-icon
    width: 5rem
    aspect-ratio: 1

#ticker
    padding-inline: 0
    background: $black
    padding-block: 4rem
    font-size: 3rem
    display: flex
    flex-flow: row nowrap
    align-items: center
    overflow: hidden

.ticker__fragment
    white-space: nowrap
    display: flex
    align-items: center
    justify-content: center
    column-gap: 1em
    animation: ticker__fragment 3s linear infinite

@keyframes ticker__fragment
    0%
        transform: translateX(0%)

    0%
        transform: translateX(-100%)

.ticker__moto
    font-weight: 1000
    color: $tennis
    text-transform: uppercase
    margin-inline-start: 3rem

.ticker__star-icon
    height: 1em
    width: 1em

#services
    background: $dark
    padding-block-start: 8rem

h2
    color: $light
    text-transform: uppercase
    font-size: 7rem
    font-weight: 1000

#services__header
    display: grid
    grid-template-columns: 60% 40%

#services__heading
    display: flex
    align-items: flex-end
    line-height: 0.7em
    column-gap: 1rem

#services__heading-circle
    background: $tennis
    width: 2rem
    aspect-ratio: 1
    display: inline-block
    border-radius: 10000px
    align-self: flex-end

#services__service-pill-tray
    display: flex
    gap: 0.5em
    flex-wrap: wrap
    justify-content: flex-end

.services__service-pill
    padding: 0.5rem 1.5rem
    border: 2px solid $gray
    border-radius: 10000px
    display: flex
    align-items: center
    justify-content: center
    column-gap: 1rem
    font-size: 1.5rem

.services__service-pill-icon
    width: 1em
    aspect-ratio: 1

.services__service-pill-name
    font-weight: 300
    color: $gray

.services__service-pill-icon:deep(*)
    stroke: $gray

#services__description
    color: $gray
    width: 72rch
    font-size: 1.5rem
    font-weight: 300
    margin-block-start: 2rem

#services__stars
    display: flex
    justify-content: flex-end
    column-gap: 5rem
    padding-block: 2rem

.services__star-icon
    height: 2rem

    :deep(*)
        fill: $gray

.services__service
    $border: $gray 2px solid
    font-size: 3rem
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: $border
    padding-block: 1em

    &:first-child
        border-top: $border

.services__service-name
    color: $smoke
    font-weight: 700

.services__service-icon
    width: 1em

    :deep(*)
        fill: $smoke

#quote
    padding-block-start: 12rem
    background: $dark

#quote__block
    background: $coal
    font-size: 6rem
    padding: 4rem

.quote__line
    display: flex
    align-items: center
    justify-content: stretch
    column-gap: 0.5ch

.quote__text
    color: $light
    text-transform: uppercase
    font-weight: 800

.quote__pill
    background-image: url("/shifjuchkin-studio/images/quote.jpg")
    height: 0.7em
    border-radius: 10000px
    min-width: 3ch

    &[data-index="A1"]
        background-position-y: 50%
        flex: 1

    &[data-index="B1"]
        background-position-y: 80%
        flex: 1

    &[data-index="C1"]
        background-position-y: 65%
        flex: 1

    &[data-index="C2"]
        background-position-y: 10%

    &[data-index="D1"]
        background-position-y: 90%

    &[data-index="D2"]
        background-position-y: 30%
        flex: 1

#project
    background: $dark
    padding-block-start: 8rem

#project__header
    display: flex
    align-items: center
    justify-content: space-between

#project__description
    width: 48rch
    font-size: 1.5rem
    color: $gray

#project__heading
    display: flex
    align-items: flex-end
    line-height: 0.7em
    column-gap: 1rem

#project__heading-circle
    background: $tennis
    width: 2rem
    aspect-ratio: 1
    display: inline-block
    border-radius: 10000px
    align-self: flex-end

#project__topic-pill-tray
    display: flex
    gap: 0.5em
    flex-wrap: wrap
    margin-block-start: 2rem

.project__topic-pill
    padding: 0.5rem 1.5rem
    border: 2px solid $gray
    border-radius: 10000px
    display: flex
    align-items: center
    justify-content: center
    column-gap: 1rem
    font-size: 1.5rem

.project__topic-pill-icon
    width: 1em
    aspect-ratio: 1

.project__topic-pill-name
    font-weight: 300
    color: $gray

.project__topic-pill-icon:deep(*)
    stroke: $gray

#project__tiles
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    gap: 3rem
    margin-block-start: 4rem

.project__tile
    background: url("/shifjuchkin-studio/images/project.jpg")
    min-width: 0
    min-height: 0
    aspect-ratio: 1

    &:nth-child(1)
        background-position: 20% 50%

    &:nth-child(2)
        grid-column: span 2
        aspect-ratio: initial
        background-position: 60% 10%

    &:nth-child(3)
        background-position: 30% 80%

    &:nth-child(4)
        background-position: 10% 10%

    &:last-child
        background: url("/shifjuchkin-studio/images/project-last.jpg")
        border-bottom-right-radius: $border-radius
        background-position: 30% 50%

#project__project-tile
    width: 100%
    height: 100%
    background: transparentize($dark, 0.20)
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 4rch
    color: $light

#project__project-tile-year
    font-weight: 400

#project__project-tile-name
    font-size: 2.5rem
    font-weight: 700
    text-transform: initial
    max-width: 8ch
    line-height: 1em

#project__tile-arrow
    padding: 2rem
    background: $black
    align-self: flex-end
    margin-block-end: auto
    transform: translate(4rch, -4rch)

#project__tile-arrow-icon
    width: 6rem

#last
    background: $dark
    padding-block-start: 9rem

#last__block
    background: $tennis
    padding: 12rch
    border-bottom-left-radius: $border-radius
    border-bottom-right-radius: $border-radius

#last__stars
    display: flex
    align-items: center
    justify-content: center
    column-gap: 6rem

.last__star-icon
    width: 2rem

    :deep(*)
        fill: $salad

#last__heading
    color: $black
    text-align: center
    line-height: 0.8em
    max-width: 10ch
    margin-inline: auto
    margin-block-start: 4rem

#last__button-tray
    display: flex
    align-items: center
    justify-content: center
    margin-inline: auto
    margin-block-start: 3rem
    column-gap: 2rem

.last__button
    padding: 1em 1.5em
    border-radius: 10000px
    font-size: 1.25rem

.last__button--primary
    background: $black
    border: none
    color: $tennis

.last__button--secondary
    background: none
    border: $black 2px solid
    color: $black

footer
    background: $dark

#footer__logo
    display: block
    text-align: center
    margin-inline: auto
    font-size: 3.5rem
    color: $tennis
    font-weight: 600
    padding-block-start: 6rem

#footer__link-tray
    display: flex
    align-items: center
    justify-content: space-between
    padding-block: 4rem

.footer__link, .footer__copyright
    color: $tennis

.footer__link
    text-decoration: none

// -- Font Face Begins From Here --

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Blk.ttf")
    font-weight: 1000

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Xbd.ttf")
    font-weight: 900

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Bd.ttf")
    font-weight: 800

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Bd.ttf")
    font-weight: 700

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Bd.ttf")
    font-weight: 600

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Md.ttf")
    font-weight: 500

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Rg.ttf")
    font-weight: 400

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Lt.ttf")
    font-weight: 300

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Th.ttf")
    font-weight: 200

@font-face
    font-family: "Halvar Breit"
    src: url("/shifjuchkin-studio/fonts/HalvarBreit-Hl.ttf")
    font-weight: 100

</style>