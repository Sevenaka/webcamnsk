<template>
  <div class="page">
    <div class="main_media">
      <div class="inf">
        <h1>Мечтаешь о карьере модели? Зарабатывай от 100.000руб, благодаря своей внешности</h1>
        <div class="arr_block" @click="skipLink()">
          <div class="arr_crc">
            <i class="ico ico_arr_down ico_pattern"></i>
          </div>
          <div class="arr_label">Узнать больше</div>
        </div>
      </div>
    </div>
    <section class="page_section">
      <h2 class="h2">Интерьеры студии <span class="main_color">Wmodels</span></h2>
      <Interier />
    </section>
    <section class="page_section bg">
      <h2 class="h2">Преимущества работы <span class="main_color">Wmodels</span></h2>
      <Favorite />
    </section>
    <section class="page_section bottom_nomrg">
      <h2 class="h2">Хотите подробностей?</h2>
      <Detals />
    </section>
    <section class="page_section">
      <h2 class="h2">Часто задаваемые вопросы</h2>
      <Faq />
    </section>
    <CallBlock />
  </div>
</template>

<script>
import Interier from '~/components/Interier'
import Favorite from '~/components/Favorite'
import Detals from '~/components/Detals'
import CallBlock from '~/components/CallBlock'
import Faq from '~/components/Faq'
export default {
  components: {
    Interier,
    Favorite,
    Detals,
    CallBlock,
    Faq
  },
  methods: {
    skipLink() {
      if (process.client) {
        let scrollHeader = window.innerHeight - 52;
        window.scrollTo({
            top: scrollHeader,
            behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style lang="scss">
.page_section{
  margin: 0px -15px;
  padding: 30px 15px;
  &.bottom_nomrg{
    padding-bottom: 0px;
  }
  &.bg{
    background: rgba(122, 72, 150, 0.06);
  }
}
.main_media{
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.4);
  }
  background: url('~static/asdsadqwe-min2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin: 0px -15px;
  z-index: 10;
  position: relative;
  color: white;
  overflow: hidden;
  .inf{
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    text-align: center;
    flex-wrap: wrap;
    align-content: center;
    h1{
      font-size: 34px;
      text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.3);
    }
    .arr_block{
      margin-top: 55px;
      cursor: pointer;
      text-align: center;
      .arr_crc{
        background: rgba(255, 255, 255, 0.2);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
        .ico{
          width: 20px;
          height: 20px;
          display: block;
          margin: 15px auto;
        }
      }
      .arr_label{
        font-weight: 500;
        font-size: 12px;
        text-transform: uppercase;
      }
    }
  }
}
</style>

