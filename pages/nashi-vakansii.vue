<template>
    <div class="page oth_page">
        <h1 class="page_title">Наши вакансии</h1>
        <div class="vak_list">
            <div class="vak_itm" :key="index" v-for="(item, index) in vak">
                <img :src="require('~/static/'+item.img)" :alt="item.name">
                <h5>{{item.name}}</h5>
                <div class="text" v-html="item.text"></div>
            </div>
        </div>
        <div class="clear_cl"></div>
        <CallBlock />
    </div>
</template>

<script>
import CallBlock from '~/components/CallBlock'
export default {
    data() {
        return {
            vak: [
                {
                    name: 'Модель',
                    text: '<p>- Возраст от 18 до 30 лет<br>- Приятная внешность<br>- Коммуникабельность<br>- Пунктуальность<br>- Базовые знания ПК<br>- Знание английского будет преимуществом<br>- Высокий заработок (от 60 000 рублей. в месяц)<br>- Выплаты 100% без задержек<br>- Просторный офис в центре города<br>- Кондиционированные рабочие места<br>- Бонусы, корпоративы<br>- Обучение для новых моделей</p>',
                    img: 'wa1.png'
                },
                {
                    name: 'Оператор',
                    text: '<p >- Возраст от 23 лет <br>- Знание английского языка (переписка) <br>- Опыт работы в сфере вебкам <br>- Скорость печати <br>- Общительность <br>- Ответственность <br>- Наличие богатой фантазии будет преимуществом<br>- Удобный график <br>- Своевременные выплаты (оклад + % от закрытого чека) <br>- Лояльное руководство <br>- Комфортные условия</p>',
                    img: 'wa2.png'
                },
                {
                    name: 'Агент по поиску моделей',
                    text: '<p >- График работы<br> свободный, удаленная работа<br><br>- Зарплата сдельная. <br>За каждую приведенную модель агент получает до 10000 рублей! При упорной и добросовестной работе зарплата достигает 80000 в месяц!</p>',
                    img: 'wa3.png'
                }
            ]
        }
    },
    components: {
        CallBlock
    },
    head() {
      return {
        title: 'Наши вакансии | WModels',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'Наши вакансии | WModels' },
          { hid: 'name', itemprop: 'name', content: 'Наши вакансии | WModels' },
        ]
      }
    }
}
</script>

<style lang="scss">
.vak_list{
    .vak_itm{
        &:not(:last-child){
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(0, 0, 0, 0.06);
        }
        img{
            margin: 0px auto;
            display: block;
            max-width: 64px;
        }
        h5{
            text-align: center;
            margin: 10px;
        }
    }
}
</style>