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
                    <div class="events__card" v-for="_ in 3">
                        <div class="events__card-image">
                            <h3 class="events__card-name">Событие века</h3>
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
                    <img src="/dragon-nest/images/_photo-grid-placeholder.jpg" alt="" class="photos__grid-photo" v-for="_ in 4">
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

                        <button class="prices__card-button">Записаться</button>
                    </div>

                    <div class="prices__card">
                        <img src="/dragon-nest/images/dragon-in-a-party-hat.png" alt="" class="prices__card-image">

                        <h3 class="prices__card-heading">Выходные</h3>
                        <p class="prices__card-description">
                            1 мин = 3 руб<br/>
                            max 500 руб
                        </p>

                        <button class="prices__card-button">Записаться</button>
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
                <a href="#" class="contacts__contact">
                    <img src="/dragon-nest/images/telegram.png" alt="" class="contacts__contact-image">
                </a>

                <a href="#" class="contacts__contact">
                    <img src="/dragon-nest/images/vk.png" alt="" class="contacts__contact-image">
                </a>

                <a href="#" class="contacts__contact">
                    <img src="/dragon-nest/images/whatsapp.png" alt="" class="contacts__contact-image">
                </a>

                <a href="#" class="contacts__contact">
                    <img src="/dragon-nest/images/phone.png" alt="" class="contacts__contact-image">
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
                            Наше дело не так однозначно, как может показаться: убеждённость некоторых оппонентов требует от нас анализа направлений прогрессивного развития. В рамках спецификации современных стандартов, независимые государства формируют глобальную экономическую сеть и при этом —  ассоциативно распределены по отраслям. Как принято считать, представители современных социальных резервов ассоциативно распределены по отраслям.
                        </p>
                    </div>

                    <div class="feedback__feedback">
                        <img src="/dragon-nest/images/dragon-circle-idle.png" alt="" class="feedback__feedback-image">
                        <p class="feedback__feedback-text">
                            Не следует, однако, забывать, что выбранный нами инновационный путь в значительной степени обусловливает важность стандартных подходов. Но элементы политического процесса описаны максимально подробно.
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

*::selection
    background: #77777733

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

.events__card-image
    background: url("/dragon-nest/images/_events-grid-placeholder.jpg")
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

.prices__card-week-day-line
    display: flex
    align-items: center
    justify-content: space-between
    font-size: 2rem
    width: max(36ch, 50%)
    margin-block-start: 0.5rem

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

.contacts__contact-image
    width: 100%

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

    &:nth-child(2n)
        flex-direction: column

    &:nth-child(2n + 1)
        flex-direction: row

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

#feedback__background-image
    position: absolute
    bottom: 0
    left: 0
    right: 0
    z-index: -1

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