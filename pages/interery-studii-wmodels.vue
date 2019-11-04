<template>
    <div class="page oth_page">
        <h1 class="page_title">Интерьеры студии Wmodels</h1>
        <Interier />
        <div class="clear_cl"></div>
        <CallBlock />
    </div>
</template>

<script>
import Interier from '~/components/Interier'
import CallBlock from '~/components/CallBlock'
export default {
    components: {
        Interier,
        CallBlock
    },
    head() {
      return {
        title: 'Интерьеры студии Wmodels | WModels',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'Интерьеры студии Wmodels | WModels' },
          { hid: 'name', itemprop: 'name', content: 'Интерьеры студии Wmodels | WModels' },
        ]
      }
    }
}
</script>