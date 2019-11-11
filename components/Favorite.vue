<template>
    <div class="favorite">
        <div class="row">
            <div class="col-6">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_time"></i>
                    <label>Гибкий график<br/> работы</label>
                </div>
            </div>
            <div class="col-6">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_money"></i>
                    <label>Высокий доход - до 180 000 рублей в месяц</label>
                </div>
            </div>
            <div class="col-6">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_education"></i>
                    <label>Возможность совмещения с учебой</label>
                </div>
            </div>
            <div class="col-6">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_design_main"></i>
                    <label>Дизайнерские интерьеры</label>
                </div>
            </div>
            <div class="col-6">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_food"></i>
                    <label>Вкусные<br/> обеды</label>
                </div>
            </div>
            <div class="col-6">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_room"></i>
                    <label>Отдельные<br/> комнаты</label>
                </div>
            </div>
            <div class="col-12">
                <div class="fav_item">
                    <i class="ico ico_pattern ico_fav"></i>
                    <label><strong>TOP5</strong> студий России по версии одного из сайтов</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.favorite{
    .fav_item{
        text-align: center;
        .ico{
            width: 44px;
            height: 44px;
            display: inline-block;
            margin-bottom: 10px;
        }
        label{
            font-size: 14px;
            font-weight: 500;
            display: block;
            margin: 0px auto;
            max-width: 160px;
            line-height: 18px;
            color: var(--main);
        }
    }
    .col-6{
        border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        padding: 15px 0;
        &:nth-child(even){
            border-left: 1px solid rgba(0, 0, 0, 0.07);
        }  
    }
    .col-12{
        padding-top: 15px;
        label{
            max-width: 220px;
        }
    }
}
</style>