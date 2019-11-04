<template>
    <div class="page oth_page">
        <h1 class="page_title">Наши контакты</h1>
        <p><strong>Наш телефон:</strong> <strong><a href="tel:8-913-717-22-92">8-913-717-22-92</a></strong></p>
        <p><strong>Напишите нам:</strong><strong><a href="mailto:job-wmodelsstudio@mail.ru">job-wmodelsstudio@mail.ru</a></strong></p>
        <p><strong>Наш адрес:</strong> г.Новосибирск, 5 мин ходьбы от м. Октябрьская</p>
        <br/>

        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aebcc31aa3d073d98220890b4414e4f01ba0e618d2e0ca3b65122193ad71706b4&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>
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
        title: 'Наши контакты | WModels',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'Наши контакты | WModels' },
          { hid: 'name', itemprop: 'name', content: 'Наши контакты | WModels' },
        ]
      }
    }
}
</script>