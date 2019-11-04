<template>
    <div class="page oth_page">
        <h1 class="page_title">FAQ</h1>
        <Faq />
        <div class="clear_cl"></div>
        <CallBlock />
    </div>
</template>

<script>
import Faq from '~/components/Faq'
import CallBlock from '~/components/CallBlock'
export default {
    components: {
        Faq,
        CallBlock
    },
    head() {
      return {
        title: 'FAQ | WModels',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'FAQ | WModels' },
          { hid: 'name', itemprop: 'name', content: 'FAQ | WModels' },
        ]
      }
    }
}
</script>