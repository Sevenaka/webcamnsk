<template>
    <div class="interier_block">
            <div class="gallery_top" ref="swiperTop" v-swiper:swiperTop="swiperOptionTop">
                <div class="swiper-wrapper">
                    <div class="slide swiper-slide" :key="index" v-for="(item, index) in lists" :style="{'background-image': 'url(' + require('~/static/interier/' + item.img) + ')' }">
                    </div>
                </div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </div>
            <div class="gallery_thumbs" ref="swiperThumbs" v-swiper:swiperThumbs="swiperOptionThumbs">
                <div class="swiper-wrapper">
                    <div class="slide swiper-slide" :key="index" v-for="(item, index) in lists" :style="{'background-image': 'url(' + require('~/static/interier/' + item.img) + ')' }">
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lists: [
                {
                    img: '11.jpg'
                },
                {
                    img: '8.jpg'
                },
                {
                    img: '9.jpg'
                },
                {
                    img: '10.jpg'
                },
                {
                    img: '1.jpg'
                },
                {
                    img: '2.jpg'
                },
                {
                    img: '3.jpg'
                },
                {
                    img: '4.jpeg'
                },
                {
                    img: '5.jpeg'
                }
            ],
            swiperOptionTop: {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 10,
                slidesPerView: 4,
                touchRatio: 0.2,
                loop: true,
                loopedSlides: 5, 
                slideToClickedSlide: true,
            }
        }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
}
</script>

<style lang="scss">
.interier_block{
    .gallery_top{
        margin: 0px -15px;
        .slide{
            height: 300px;
            background-position: center!important;
            background-size: cover!important;
            background-repeat: no-repeat!important;
        }
    }
    .gallery_thumbs{
        margin-top: 15px;
        .slide{
            width: 25%!important;
            height: 70px;
            background-position: center!important;
            background-size: cover!important;
            background-repeat: no-repeat!important;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                border: 3px solid var(--main);
                opacity: 0;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                transition: all 0.15s ease-in;
            }
            &.swiper-slide-active::after{
                opacity: 1;
            }
        }
    }
}
</style>