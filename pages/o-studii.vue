<template>
    <div class="page oth_page">
        <h1 class="page_title">Общайся и зарабатывай</h1>
        <p>Студия Wmodels (Новосибирск) работает в сфере развлекательных услуг с 2010 года. За более чем десятилетний опыт работы наша студия приняла участие в различных международных конференциях и саммитах, среди которых: AWSummit и Bucharest Summit в Румынии, WTF Summit в Сочи. В 2018 году мы вошли в ТОП 5 студий среди России и Украины по версии одного из сайтов.</p>

        <p>Мы имеем прямые контакты с представителями ведущих площадок, а это значит, что мы гарантируем оперативную техническую поддержку и отвечаем за анонимность наших моделей.</p>

        <p>Наша студия располагается в просторном офисном помещении в пяти минутах ходьбы от станции метро Октябрьская. Изолированные рабочие места с новейшим оборудованием и индивидуальным дизайном помогут Вам стать успешной моделью. Для моделей без знания английского языка студия Wmodels предоставляет квалифицированного оператора-переводчика. А самое главное, для новых моделей в нашей студии проводится обучение.</p>

        <p>Попробуйте свои силы. Возможно, работа веб-моделью - ваша дорога к успеху. Оставьте заявку на нашем сайте и начните зарабатывать от 80 000 руб. в месяц уже сегодня.</p>
        <div class="clear_cl"></div>
        <CallBlock />
    </div>
</template>

<script>
import CallBlock from '~/components/CallBlock'
export default {
    components: {
        CallBlock
    },
    head() {
      return {
        title: 'О студиоо | Wmodels',
        meta: [
          { hid: 'description', name: 'description', content: 'Студия Wmodels (Новосибирск) работает в сфере развлекательных услуг уже 10 лет, а это значит, что мы гарантируем вам стабильные выплаты уже ПОСЛЕ ПЕРВОГО дня работы. Мы предоставляем доступ к лучшим зарубежным сайтам и отвечаем за вашу анонимность.' },
          { hid: 'og:title', property: 'og:title', content: 'О студиоо | Wmodels' },
          { hid: 'og:description', property: 'og:description', content: 'Студия Wmodels (Новосибирск) работает в сфере развлекательных услуг уже 10 лет, а это значит, что мы гарантируем вам стабильные выплаты уже ПОСЛЕ ПЕРВОГО дня работы. Мы предоставляем доступ к лучшим зарубежным сайтам и отвечаем за вашу анонимность.' },
          { hid: 'name', itemprop: 'name', content: 'О студиоо | Wmodels' },
        ]
      }
    }
}
</script>