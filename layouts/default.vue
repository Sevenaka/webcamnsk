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
        <div class="profile_btn">
          <button :class="sticky">Заполнить анкету</button>
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SideMenu from '~/components/SideMenu'

export default {
  data(){
    return {
      sticky: 'unpinned',
      noVisCal: true
    }
  },
  components: {
    Header,
    Footer,
    SideMenu
  },
  mounted() {
    if (process.client) {
      let prevScrollpos = window.pageYOffset,
          scrollMonitor = window.innerHeight / 2,
          calBlock = document.querySelector('.call_block');

      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if(currentScrollPos >= scrollMonitor && this.noVisCal) {
            if (prevScrollpos > currentScrollPos) this.sticky = 'unpinned'
            else this.sticky = 'pinned'
        } else this.sticky = 'unpinned'
        prevScrollpos = currentScrollPos;
      }

      let options = {
          rootMargin: '10px',
          threshold: 0.01
      };

      let observer = new IntersectionObserver((entry, observer) => {
          if (entry[0].intersectionRatio > 0) {
            this.noVisCal = false;
          } else {
            this.noVisCal = true;
          }
      }, options);
      observer.observe(calBlock);
    }
  }
}
</script>