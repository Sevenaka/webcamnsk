<template>
    <footer class="footer">
        <div class="footer_fix">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav>
                            <ul>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="ico ico_home"></i>
                                        <div class="label">Главная</div>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/nashi-vakansii">
                                        <i class="ico ico_resume"></i>
                                        <div class="label">Вакансии</div>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/interery-studii-wmodels">
                                        <i class="ico ico_int"></i>
                                        <div class="label">Интерьеры</div>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/faq">
                                        <i class="ico ico_faq"></i>
                                        <div class="label">FAQ</div>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <button @click="menuToggle()">
                                        <i class="ico ico_menu"></i>
                                        <div class="label">Меню</div>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        menuToggle() {
            if(process.client) {
                if(document.body.classList.contains('open')){
                    document.body.classList.remove('open');
                } else {
                    document.body.classList.add('open');
                }
            }
        }
    }
}
</script>

<style lang="scss">
.footer{
    z-index: 9994;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    position: relative;
    height: auto;
    .footer_fix{
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        text-align: center;
        --safe-area-inset-bottom: env(safe-area-inset-bottom);
        padding-bottom: calc(0px + var(--safe-area-inset-bottom));
        box-shadow: 0 2px 10px 0 rgba(28,24,25,.1);
        box-sizing: border-box;
        will-change: transform;
        .container{
            padding: 0px;
        }
        nav{
            ul{
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                li{
                    list-style: none;
                    max-width: 100%;
                    button{
                        border: 0px;
                        cursor: pointer;
                        background: transparent;
                        -webkit-appearance: initial;
                    }
                    button,
                    a{
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        padding-bottom: 5px;
                        padding-top: 5px;
                        position: relative;
                        .ico{
                            width: 31px;
                            height: 26px;
                            display: inline-block;
                            background-position: center!important;
                            background-size: contain!important;
                            background-repeat: no-repeat!important;
                            &.ico_home{
                                background: url('~static/ico/home.svg');
                            }
                            &.ico_menu{
                                background: url('~static/ico/list-menu.svg');
                            }
                            &.ico_resume{
                                background: url('~static/ico/briefcase.svg');
                            }
                            &.ico_faq{
                                background: url('~static/ico/info.svg');
                            }
                            &.ico_int{
                                background: url('~static/ico/armchair.svg');
                            }
                        }
                        .label{
                            font-size: 11px;
                            width: 100%;
                            margin-top: 2px;
                            color: #5e5e5e;
                        }
                    }
                }
            }
        }
    }
}
body{
    &:not(.open){
        .footer{
            .footer_fix{
                nav{
                    ul{
                        li{
                            a{
                                &.nuxt-link-exact-active{
                                    .label{
                                        color: var(--main);
                                    }
                                    .ico{
                                        &.ico_home{
                                            background: url('~static/ico/home_color.svg');
                                        }
                                        &.ico_resume{
                                            background: url('~static/ico/briefcase_color.svg');
                                        }
                                        &.ico_int{
                                            background: url('~static/ico/armchair_color.svg');
                                        }
                                        &.ico_faq{
                                            background: url('~static/ico/info_color.svg');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    &.open{
        .footer{
            .footer_fix{
                nav{
                    ul{
                        li{
                            button{
                                .label{
                                    color: var(--main);
                                }
                                .ico{
                                    &.ico_menu{
                                        background: url('~static/ico/list-menu_color.svg');
                                    }
                                }
                            }  
                        }
                    }
                }
            }
        }
    }
}
</style>