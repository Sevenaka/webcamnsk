<template>
    <div>
        <Header />
        <main class="container">
          <div class="row">
            <div class="col-md-12">
              <nuxt/>
            </div>
          </div>
        </main>
        <Footer />
        <div class="footer_clearfix"></div>
        <SideMenu />
    </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SideMenu from '~/components/SideMenu'

export default {
  components: {
    Header,
    Footer,
    SideMenu
  }
}
</script>