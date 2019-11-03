<template>
    <div class="detal">
        <a class="detal_item" :to="item.link" :key="index" v-for="(item, index) in detals" :style="{'background-image': 'url(' + require('~/static/detal/' + item.img) + ')' }">
            <h3 class="name"><span>{{item.name}}</span></h3>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            detals: [
                {
                    name: 'Надо знать английский?',
                    img: 'd1.jpg',
                    link: '/faq'
                },
                {
                    name: 'Какой график работы?',
                    img: 'd2.jpg',
                    link: '/faq'
                },
                {
                    name: 'А сколько можно зарабатывать?',
                    img: 'd3.jpeg',
                    link: '/faq'
                },
                {
                    name: 'Нужна ли модельная внешность?',
                    img: 'd4.jpg',
                    link: '/faq'
                },
                {
                    name: 'Как начать работать?',
                    img: 'd5.jpg',
                    link: '/faq'
                },
                {
                    name: 'Это наверно сложно?',
                    img: 'd6.jpg',
                    link: '/faq'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.detal{
    margin: 0px -15px;
    .detal_item{
        padding: 20px 15px;
        display: flex;
        align-items: center;
        min-height: 200px;
        margin-bottom: 2px;
        background-position: center!important;
        background-repeat: no-repeat!important;
        background-size: cover!important;
        background-color: rgba(30,181,217, 0.77);
        background-blend-mode: multiply;
        .name{
            color: #ffffff;
            display: inline-block;
            font-size: 20px;
            max-width: 260px;
            margin: 0px;
            font-weight: bold;
            line-height: 1.5;
            span{
                background: var(--main);
                padding: 5px;
            }
        }
    }
}
</style>