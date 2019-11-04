<template>
    <div class="call_block">
        <h4>Всего два клика и с тобой свяжется наш администратор</h4>
        <form @submit.prevent="formSubmit">
            <div v-if="error" class="alert alert-danger" role="alert">
                Заполните все поля
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="name" id="formName" placeholder="Ваше имя *">
            </div>
            <div class="form-group">
                <input type="tel" class="form-control" v-model="phone" id="formName" placeholder="Ваш телефон *">
            </div>
            <div class="form-group">
                <label class="chc_label">Кем Вы хотите работать в сфере вебкам? *</label>
                <div class="check_list">
                    <div class="custom-control custom-radio">
                        <input v-model="chc" value="Веб-моделью" type="radio" id="selectType" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="selectType">
                            <i class="ico ico_pattern ico_web_model"></i>
                            <div class="name">Веб <br/>моделью</div>
                        </label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input v-model="chc" value="Оператор" type="radio" id="selectType2" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="selectType2">
                            <i class="ico ico_pattern ico_operator"></i>
                            <div class="name">Оператор</div>
                        </label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input v-model="chc" value="Агент" type="radio" id="selectType3" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="selectType3">
                            <i class="ico ico_pattern ico_agent"></i>
                            <div class="name">Агент</div>
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg center_btn">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chc: 'Веб-моделью',
            name: '',
            phone: '',
            error: false
        }
    },
    methods: {
        formSubmit(){
            if(this.name && this.phone) {
                this.error = false;
                this.formRequest();
            } else {
                this.error = true;
            }
        },
        async formRequest(){
            let data = {
                name: this.name,
                phone: this.phone,
                type: this.chc
            }
            const response = await this.$axios.$post('api/', data);
            console.log(response);
        }
    }
}
</script>

<style lang="scss">
.call_block{
    background-image: url('~static/clbg.jpg');
    margin: 0px -15px;
    padding: 30px 15px;
    color: #ffffff;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    .center_btn{
        margin: 0px auto;
        display: block;
    }
    h4{
        margin-bottom: 30px;
        font-size: 24px;
    }
    input[type=tel],
    input[type=text]{
        background: rgba(255, 255, 255, 0.05);
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
        padding: 5px 10px;
        height: 52px!important;
        border: 2px solid white;
        color: #ffffff;
    }
    input::placeholder{
        color: #ffffff;
    }
    .check_list{
        display: flex;
        justify-content: space-between;
        button{
            border-radius: 3px;
        }
        .custom-radio{
            max-width: 100%;
            padding: 0px;
            .custom-control-label{
                text-align: center;
                padding: 10px;
                border-radius: 3px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.05);
                width: 110px;
                &::before,
                &::after{
                    display: none;
                }
                .ico{
                    width: 44px;
                    height: 44px;
                    display: inline-block;
                    opacity: 0.6;
                }
                .name{
                    font-size: 14px;
                    line-height: 14px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            .custom-control-input:checked~.custom-control-label{
                border-color: #ffffff;
                .ico{
                    opacity: 1;
                }
                
            }
        }
    }
}
</style>