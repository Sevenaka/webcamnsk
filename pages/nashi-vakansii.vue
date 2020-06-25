<template>
    <div class="page oth_page vak_page">
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
                    text: '<p>- Возраст от 18 до 30 лет<br>- Приятная внешность<br>- Коммуникабельность<br>- Пунктуальность<br>- Базовые знания ПК<br>- Знание английского будет преимуществом<br>- Высокий заработок (от 60 000 руб/мес.)<br>- Выплаты 100% без задержек<br>- Просторный офис в центре города<br>- Кондиционированные рабочие места<br>- Бонусы, корпоративы<br>- Обучение для новых моделей</p>',
                    img: 'wa1.png'
                },
                {
                    name: 'Оператор',
                    text: '<p >- Возраст от 23 лет <br>- Знание английского языка (переписка) <br>- Опыт работы в сфере вебкам <br>- Скорость печати <br>- Общительность <br>- Ответственность <br>- Наличие богатой фантазии будет преимуществом<br>- Удобный график <br>- Своевременные выплаты (оклад + % от закрытого чека) <br>- Лояльное руководство <br>- Комфортные условия</p>',
                    img: 'wa2.png'
                },
                {
                    name: 'Администратор',
                    text: '<p>- Девушка от 27 лет<br>- График работы 5/2. 22-00 - 07-00<br>- Ответственная (!!)<br>- Коммуникабельная<br>- Опыт в руководстве людьми, умение<br>убеждать и располагать к себе<br>- Опыт работы в сфере Вебкам<br><br></p><center><label>Задачи:</label></center><p>- Обучение и контроль сотрудников, в соответствии с правилами студии<br>- Мотивация и настрой моделей<br>- Поддержание порядка на студии <br><br>Мы очень ценим позитивный настрой и любовь к жизни всех наших сотрудников. Нам должно быть легко в общении с Вами. Всему остальному мы Вас научим.</p>',
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
.vak_page{
    h1{
        text-align: center;
        font-weight: normal;
    }
}
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
            font-weight: normal;
            color: var(--main);
        }
    }
}
</style>