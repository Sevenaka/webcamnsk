<template>
    <div class="side_menu">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="menu_block side_block">
                        <nav>
                            <ul>
                                <li><nuxt-link to="/o-studii">О студии</nuxt-link></li>
                                <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="side_block">
                        <button type="button" class="btn btn-primary btn-lg">Заполнить анкету</button>
                    </div>
                    <div class="side_block">
                        <div class="kont_itm">
                            <i class="ico ico_pattern ico_location"></i>
                            г.Новосибирск, метро Октябрьская
                        </div>
                        <div class="clear"></div>
                        <div class="kont_itm">
                            <i class="ico ico_pattern ico_call_phone"></i>
                            <a href="tel:+7-913-717-22-92">+7-913-717-22-92</a>
                        </div>
                        <div class="clear"></div>
                        <div class="kont_itm">
                            <i class="ico ico_pattern ico_email"></i>
                            <a href="mailto:job-wmodelsstudio@mail.ru">job-wmodelsstudio@mail.ru</a>
                        </div>
                        <div class="clear"></div>
                        <br />
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aebcc31aa3d073d98220890b4414e4f01ba0e618d2e0ca3b65122193ad71706b4&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.side_menu{
    background: white;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 49;
    width: 100%;
    padding-top: 82px;
    -webkit-overflow-scrolling: touch;
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    padding-bottom: calc(74px + var(--safe-area-inset-bottom));
    overflow-y: auto;
    z-index: 1000;
    display: none;
    .side_block{
        margin-bottom: 15px;
        text-align: center;
        .clear{
            width: 100%;
            display: block;
            clear: both;
        }
        .kont_itm{
            display: inline-block;
            .ico{
                width: 14px;
                height: 14px;
                float: left;
                margin-right: 5px;
                margin-top: 6px;
            }
            &:not(:last-child){
                margin-bottom: 6px;
            }
            a{
                color: black;
            }
        }
        &.menu_block{
            margin-bottom: 40px;
        }
        nav{
            ul{
                padding: 0px;
                margin: 0px;
                font-size: 18px;
                li{
                    list-style: none;
                    a{
                        color: black;
                        text-transform: uppercase;
                        display: block;
                        padding: 8px 0px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
}
body{
    &.open{
        .side_menu{
            display: block;
        }
    }
}
</style>