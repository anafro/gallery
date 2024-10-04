<script setup lang="ts">
import GalleryPageTemplate from "~/components/templates/GalleryPageTemplate.vue";

onMounted((): void => {
    const ymaps = window.ymaps;

    ymaps.ready(() => {
        ymaps.geocode('Владивосток, ул. Семёновская, 9.').then((geocode) => {
            const coordinates = geocode.geoObjects.get(0).geometry.getCoordinates();
            const map = new ymaps.Map("map__map", {
                center: coordinates,
                zoom: 17,
            });

            map.behaviors.disable("scrollZoom");
            map.geoObjects.add(new ymaps.Placemark(coordinates));
        });
    });
});
</script>

<template>
    <GalleryPageTemplate>
        <div id="dragon-nest">
            <section id="hero">
                <img src="/dragon-nest/images/hero-full.png" alt="Dragon Nest" id="hero__image">
            </section>

            <section id="events">
                <h2 id="events__heading">Ближайшие события</h2>
                <div id="events__cards">
                    <div class="events__card">
                        <div class="events__card-image">
                            <h3 class="events__card-name">Событие №1</h3>
                        </div>

                        <p class="events__card-description">
                            Точно взбудоражит ваше сознание
                        </p>
                    </div>

                    <div class="events__card">
                        <div class="events__card-image">
                            <h3 class="events__card-name">Событие №2</h3>
                        </div>

                        <p class="events__card-description">
                            Точно взбудоражит ваше сознание
                        </p>
                    </div>

                    <div class="events__card">
                        <div class="events__card-image">
                            <h3 class="events__card-name">Событие №3</h3>
                        </div>

                        <p class="events__card-description">
                            Точно взбудоражит ваше сознание
                        </p>
                    </div>
                </div>
            </section>

            <section id="photos">
                <div id="photos__head">
                    <img src="/dragon-nest/images/dragon-nest.png" alt="" id="photos__head-nest-image">
                    <h2 id="photos__heading">Фото гнезда</h2>
                    <img src="/dragon-nest/images/dragon-taking-photos.png" alt="" id="photos__head-photo-image">
                </div>

                <div id="photos__grid">
                    <img src="/dragon-nest/images/photo-1.jpg" alt="" class="photos__grid-photo">
                    <img src="/dragon-nest/images/photo-2.jpg" alt="" class="photos__grid-photo">
                    <img src="/dragon-nest/images/photo-3.jpg" alt="" class="photos__grid-photo">
                    <img src="/dragon-nest/images/photo-4.jpg" alt="" class="photos__grid-photo">
                </div>
            </section>

            <section id="features">
                <h2 id="features__heading">О нашем уютном гнёздышке</h2>

                <div id="features__grid">
                    <div class="features__feature">
                        <img src="/dragon-nest/images/dragon-with-a-circle.png" alt="dragon-with-a-circle" class="features__feature-image">
                        <h3 class="features__feature-name">Находимся в центре</h3>
                    </div>

                    <div class="features__feature">
                        <img src="/dragon-nest/images/dragon-nest-area.png" alt="dragon-nest-area" class="features__feature-image">
                        <h3 class="features__feature-name">25 м2</h3>
                    </div>

                    <div class="features__feature">
                        <img src="/dragon-nest/images/dragon-projector.png" alt="dragon-projector" class="features__feature-image">
                        <h3 class="features__feature-name">Проектор</h3>
                    </div>

                    <div class="features__feature">
                        <img src="/dragon-nest/images/dragon-drinking-tea.png" alt="dragon-drinking-tea" class="features__feature-image">
                        <h3 class="features__feature-name">Бесплатный чай</h3>
                    </div>

                    <div class="features__feature">
                        <img src="/dragon-nest/images/dragon-sitting-in-a-tower.png" alt="dragon-sitting-in-a-tower" class="features__feature-image">
                    </div>
                </div>
            </section>

            <section id="prices">
                <h2 id="prices__heading">Запись на игры</h2>

                <div id="prices__grid">
                    <div class="prices__card">
                        <img src="/dragon-nest/images/dragon-throwing-dices-and-pizza.png" alt="" class="prices__card-image">

                        <h3 class="prices__card-heading">Будни</h3>
                        <p class="prices__card-description">
                            1 мин = 2 руб<br/>
                            max 300 руб
                        </p>

                        <a href="https://t.me/gnesvdk" class="prices__card-button">Записаться</a>
                    </div>

                    <div class="prices__card">
                        <img src="/dragon-nest/images/dragon-in-a-party-hat.png" alt="" class="prices__card-image">

                        <h3 class="prices__card-heading">Выходные</h3>
                        <p class="prices__card-description">
                            1 мин = 3 руб<br/>
                            max 500 руб
                        </p>

                        <a href="https://t.me/gnesvdk" class="prices__card-button">Записаться</a>
                    </div>

                    <div class="prices__card">
                        <h3 class="prices__card-heading">Аренда помещения</h3>
                        <div class="prices__card-week-day-line">
                            <span class="prices__card-week-day">Будни</span>
                            <span class="prices__card-week-day-price">1 час = 950 руб</span>
                        </div>

                        <div class="prices__card-week-day-line">
                            <span class="prices__card-week-day">Выходные</span>
                            <span class="prices__card-week-day-price">1 час = 1600 руб</span>
                        </div>

                        <div class="prices__card-week-day-line">
                            <span class="prices__card-week-day">После 20:00</span>
                            <span class="prices__card-week-day-price">1 час = 1900 руб</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacts">
                <a href="https://t.me/gnesvdk" class="contacts__contact">
                    <img src="/dragon-nest/images/telegram.png" alt="" class="contacts__contact-image">
                    <span class="contacts__contact-text">Наш ТГ</span>
                </a>

                <a href="https://vk.com/gnesvdk" class="contacts__contact">
                    <img src="/dragon-nest/images/vk.png" alt="" class="contacts__contact-image">
                    <span class="contacts__contact-text">Наш ВК</span>
                </a>

                <a href="https://api.whatsapp.com/send?phone=79952805379" class="contacts__contact">
                    <img src="/dragon-nest/images/whatsapp.png" alt="" class="contacts__contact-image">
                    <span class="contacts__contact-text">Наш WA</span>
                </a>

                <a href="tel:+7995-280-53-79" class="contacts__contact">
                    <img src="/dragon-nest/images/phone.png" alt="" class="contacts__contact-image">
                    <span class="contacts__contact-text">+79952805379</span>
                </a>
            </section>

            <section id="map">
                <div id="map__map"></div>
            </section>

            <section id="feedback">
                <h2 id="feedback__heading">Отзывы</h2>

                <div id="feedback__grid">
                    <div class="feedback__feedback">
                        <img src="/dragon-nest/images/dragon-circle-staring.png" alt="" class="feedback__feedback-image">
                        <p class="feedback__feedback-text">
                            Суперкомфортик<br />
                            Очень крутые ребята работают и интересно можно провести время
                        </p>
                    </div>

                    <div class="feedback__feedback">
                        <img src="/dragon-nest/images/dragon-circle-idle.png" alt="" class="feedback__feedback-image">
                        <p class="feedback__feedback-text">
                            Хочу выразить благодарность ребятам. Провели веселый вечер, а главное комфортный. Вячеслав мастер своего дела. Вы большие молодцы. Советую всем посетить это место
                        </p>
                    </div>

                    <div class="feedback__feedback">
                        <img src="/dragon-nest/images/dragon-circle-excited.png" alt="" class="feedback__feedback-image">
                        <p class="feedback__feedback-text">
                            Большое разнообразие игры, добрые, весёлые и интересные админы) Вкусный чай и клёвая атмосфера! Музыка просто огонь! Советую посетить данное антикафе
                        </p>
                    </div>

                    <div class="feedback__feedback">
                        <img src="/dragon-nest/images/dragon-circle-kissing.png" alt="" class="feedback__feedback-image">
                        <p class="feedback__feedback-text">
                            Суперские ребята, жаль правда, что места маловато, но зато настолок много - играй во что хочешь без ограничений. Мне это понравилось, и никто не нудил:)
                        </p>
                    </div>
                </div>

                <img src="/dragon-nest/images/fire.png" alt="" id="feedback__background-image">
            </section>
        </div>
    </GalleryPageTemplate>
</template>

<style scoped lang="sass">
$berries: #3D0832
$vine: #5D1934
$blood: #892B38
$fire: #9D4B2D
$peach: #FF9C64
$sand: #FFD5AE
$strawberry-cocktail: #BC5B64
$chair: #90466A
$lava: #FF9028
$snow: #FFFFFF
$magma: #F19152
$wood: #EFB37E
$coal: #000000
$dragon-gradient: linear-gradient(to bottom, $berries 0%, $blood 20%, $fire 55%, $lava 90%)

#dragon-nest
    background-image: $dragon-gradient

*, *::before, *::after
    box-sizing: border-box
    font-family: "Avdira", serif
    color: $snow
    @include debug

*::selection
    background: #77777733

img
    object-fit: cover

section
    max-width: 100lvw

h1, h2, h3, h4, h5, h6
    margin: 0

h2
    font-size: 4rem

#hero
    display: grid
    place-items: center

#hero__image
    width: 100%

#events
    margin-block-start: -11rem
    padding-inline: 6rem

#events__heading
    text-align: right
    padding-inline-end: 2ch

#events__cards
    display: flex
    justify-content: space-between
    column-gap: 6rem
    margin-block-start: 3rem

.events__card
    background: $strawberry-cocktail
    border-radius: 1rem
    contain: paint

    &:nth-child(1) .events__card-image
        background-image: url("/dragon-nest/images/event-1.jpg")

    &:nth-child(2) .events__card-image
        background-image: url("/dragon-nest/images/event-2.jpg")

    &:nth-child(3) .events__card-image
        background-image: url("/dragon-nest/images/event-3.jpg")

.events__card-image
    background-size: cover
    background-position: 20% 50%
    padding-block-start: 12rem
    padding-inline: 1rem
    padding-block-end: 0.5rem

.events__card-name
    text-transform: uppercase
    font-size: 3rem

.events__card-description
    font-size: 2rem
    padding-inline: 1rem
    padding-block: 0.5rem
    text-transform: lowercase
    font-weight: 100

#photos
    margin-block-start: 4rem

#photos__head
    display: flex
    justify-content: space-between
    position: relative

#photos__head-photo-image
    align-self: flex-end

#photos__heading
    position: absolute
    bottom: 6rch
    left: 36rch

#photos__grid
    display: grid
    grid-template-columns: repeat(3, 1fr)

.photos__grid-photo
    object-fit: cover
    width: 100%
    height: 24rem
    opacity: 0.50

    &:first-child, &:last-child
        grid-column: span 2

#features
    padding-inline: 3rem
    margin-block-start: 3rem

#features__heading
    text-align: center

#features__grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    margin-block: 1rem

.features__feature
    display: grid
    place-items: center

    &:last-child
        grid-column: 3
        grid-row: 1 / span 2

.features__feature-name
    font-size: 2rem
    text-align: center

#feedback__background-image
    width: 100%

#prices
    margin-block-start: 3rem

#prices__heading
    text-align: center

#prices__grid
    display: grid
    grid-template-columns: repeat(2, 1fr)
    padding-inline: 18rem
    grid-gap: 4rem
    margin-block-start: 3rem

.prices__card
    background: $vine
    border-radius: 1rem
    padding: 4rem
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    &:nth-child(1) .prices__card-image
        left: -229px
        top: -150px

    &:nth-child(2) .prices__card-image
        right: -203px
        top: -120px

    &:last-child
        grid-column: span 2

.prices__card-image
    position: absolute
    height: 500px

.prices__card-heading
    font-size: 3rem
    color: $peach
    text-align: center

.prices__card-description
    font-size: 2rem
    color: $sand
    text-align: center

.prices__card-button
    background: $magma
    font-size: 2rem
    color: $snow
    border: none
    padding: 0.5rem 1rem
    border-radius: 0.5rem
    font-weight: 1000
    text-decoration: none

.prices__card-week-day-line
    display: flex
    align-items: center
    justify-content: space-between
    font-size: 2rem
    width: max(36ch, 50%)
    margin-block-start: 1rem

    *
        color: $sand

.prices__card-week-day
    display: inline-block
    padding: 0.25em
    background: $chair
    border-radius: 0.5rem
    width: 15ch
    text-align: center
    text-wrap: nowrap

#contacts
    display: flex
    align-items: center
    justify-content: space-between
    padding-inline: 4rem

.contacts__contact
    display: inline-flex
    flex-direction: column
    text-decoration: none
    align-items: center
    justify-content: space-between

.contacts__contact-image
    width: 100%

.contacts__contact-text
    font-size: 1.75rem
    color: $sand
    font-weight: 1000

#map
    margin-block-start: 4rem

#map__map
    height: 80lvh

#feedback
    position: relative
    isolation: isolate
    min-height: 140lvh
    margin-block-start: 4rem
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    row-gap: 3rem

#feedback__heading
    text-align: center

#feedback__grid
    display: grid
    grid-template-columns: repeat(2, 1fr)
    padding-inline: 6rem
    grid-gap: 6rem

.feedback__feedback
    display: flex
    gap: 1.5rem
    align-items: flex-end

    &:nth-child(4n + 0)
        flex-direction: column
        align-items: flex-start

    &:nth-child(4n + 1)
        flex-direction: row

    &:nth-child(4n + 2)
        flex-direction: column-reverse

    &:nth-child(4n + 3)
        flex-direction: row-reverse
        align-items: flex-start

.feedback__feedback-image
    width: 4rem
    height: 4rem

.feedback__feedback-text
    background: $peach
    color: $coal
    padding: 1.5rem
    border-radius: 1rem
    font-size: 1.5rem
    margin: 0
    max-width: 36ch

#feedback__background-image
    position: absolute
    bottom: 0
    left: 0
    right: 0
    z-index: -1

@media screen and (max-width: 1500px)
    #events
        margin-block-start: 0

    #events__heading
        padding-inline-end: 0
        text-align: center

    #events__cards
        flex-direction: column
        row-gap: 4rem
        padding-inline: min(10dvw, 16rem)

    #photos__head
        flex-direction: column

    #photos__head-nest-image
        display: none

    #photos__heading
        position: initial
        margin-inline-start: 4rem
        margin-block-start: 4rem
        margin-block-end: 2rem

    #photos__head-photo-image
        max-width: 100dvw

    #features__grid
        grid-template-columns: repeat(2, 1fr)
        grid-template-rows: repeat(2, 1fr)

    .features__feature:last-child
        display: none

    #prices__grid
        display: flex
        flex-direction: column

    .prices__card:nth-child(1) .prices__card-image
        top: -75px

    .prices__card:nth-child(2) .prices__card-image
        top: -55px

    .prices__card:last-child
        grid-column: span 1


@media screen and (max-width: 1200px)
    .prices__card-week-day-line
        flex-direction: column
        margin-block-start: 3rem
        row-gap: 0.5rem

    #contacts
        display: grid
        grid-template-rows: repeat(2, 1fr)
        grid-template-columns: repeat(2, 1fr)


@media screen and (max-width: 1000px)
    #events__cards
        padding-inline: 1rem

    #photos__heading
        text-align: center
        margin-inline-start: 0

    #photos__grid
        grid-template-rows: repeat(4, 1fr)
        grid-template-columns: 1fr

    .photos__grid-photo
        grid-column: span 1 !important

    #features__grid
        margin-block-start: 2.5rem

    #feedback__grid
        grid-template-columns: 1fr
        grid-template-rows: initial
        padding-block: 4rem


@media screen and (max-width: 900px)
    #features__grid
        grid-template-rows: repeat(1, 4fr)
        grid-template-columns: 1fr
        row-gap: 2rem

    #prices__grid
        padding-inline: 12rem

    .prices__card-image
        height: 300px

    .prices__card:nth-child(1) .prices__card-image
        top: 0
        left: -140px

    .prices__card:nth-child(2) .prices__card-image
        top: 55px
        right: -122px


@media screen and (max-width: 800px)
    #prices__grid
        padding-inline: 4rem

    .prices__card
        contain: paint

    .prices__card-image
        opacity: 0.20
        bottom: 0
        top: initial
        height: 350px

    .prices__card:nth-child(1) .prices__card-image
        left: initial
        right: -110px

    .prices__card:nth-child(2) .prices__card-image
        right: initial
        left: -50px
        transform: rotate(22.5deg)
        top: 20px

    #feedback__grid
        padding-inline: 2rem


@media screen and (max-width: 700px)
    h2
        font-size: 2.5rem

    #events__heading
        margin-block-start: 4rem

    .events__card-name
        font-size: 2.25rem

    .events__card-description
        font-size: 1.5rem

@media screen and (max-width: 600px)
    #events
        padding-inline: 2rem

    #prices__grid
        padding-inline: 2rem

    #contacts
        grid-template-columns: 1fr
        grid-template-rows: initial

// -- Font Faces Are Below --
@font-face
    font-family: "Avdira"
    src: url("/dragon-nest/fonts/Avdira_R.otf")
    font-weight: 500

@font-face
    font-family: "Avdira"
    src: url("/dragon-nest/fonts/Avdira_B.otf")
    font-weight: 700

</style>