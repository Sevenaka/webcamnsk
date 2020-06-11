<template>
    <header :class="['header', header]">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="header_kont">
                        <a class="itm" href="tel:+7-913-717-22-92">
                            <i class="ico ico_pattern ico_phone"></i>
                        </a>
                        <a class="itm" href="https://api.whatsapp.com/send?phone=79137172292">
                            <i class="ico ico_pattern ico_whts"></i>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <nuxt-link class="main-logo" to="/">
                        <img src="~/static/wmlogo.png" />
                    </nuxt-link>
                </div>
                <div class="col-4">
                    <div class="header_kont right">
                        <a class="itm" href="https://vk.com/wmodelsstudio">
                            <i class="ico ico_pattern ico_vk"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            header: ''
        }
    },
    mounted(){
        if(process.client) {
            const headerAct = () => {
                if(this.$route.fullPath == '/') {
                    let currentScrollPos;
                    this.header = '';
                    document.addEventListener('scroll', () => {
                        if(this.$route.fullPath == '/') {

                            currentScrollPos = window.pageYOffset;
                            if(currentScrollPos >= 100) {
                                this.header = 'top';
                            } else {
                                this.header = '';
                            }
                        }
                    });
                } else {
                    this.header = 'top';
                    return false;
                }
            }

            $nuxt.$on('routeChanged', (to, from) => {
                headerAct();
                document.body.classList.remove('open');
            })
            headerAct();
            
        }
    }
}
</script>

<style lang="scss">
body{
    &.open{
        .header{
            background: var(--main);
        }
    }
}
.header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 1050;
    padding-top: 8px;
    padding-bottom: 8px;
    transition: all .4s ease;
    &.top{
        background: var(--main);
    }
    .header_kont{
        display: flex;
        align-items: center;
        height: 100%;
        &.right{
            justify-content: flex-end;
        }
        .itm{
            display: block;
            &:not(:last-child){
                margin-right: 20px;
            }
            i{
                width: 26px;
                height: 26px;
                display: inline-block;
            }
        }
    }
    .main-logo{
        text-align: center;
        display: block;
        img{
            width: 100%;
            max-width: 70px;
        }
    }
}
</style>