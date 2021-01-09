<template>
    <div>
        <img src="/@/assets/husky.jpg" />
        <a-row class="btn">
            <a-button type="primary" @click="test">axios测试</a-button>
            <a-button type="primary" @click="testMockUrl">测试mock</a-button>
            <a-button type="primary" @click="cleanAll">清空</a-button>
        </a-row>
        <p class="color-red">{{text}}</p>
    </div>
</template>

<script>
    import {defineComponent, reactive, toRefs} from 'vue'
    import * as axios from 'axios'
    import {message} from 'ant-design-vue'

    export default defineComponent({
        name: "Test",
        setup() {
            const http = axios.default
            let textData = reactive({text: {}})

            //axios请求
            const test = () => {
                http.get('/api/p/docs', {}).then((data) => {
                    textData.text = data.data
                },(err) => {
                    message.error('请求失败!'+err.message)
                })
            }
            //mock测试
            const testMockUrl = () => {
                http.get('/mock/test').then((data) => {
                    textData.text = data.data
                },(err) => {
                    message.error('请求失败!'+err.message)
                })
            }
            //清空
            const cleanAll = () => {
                textData.text = {}
            }
            return {test, ...toRefs(textData), cleanAll, testMockUrl}
        }
    })
</script>

<style scoped lang="less">
    .color-red {
        color: @my-color
    }
    .btn button{margin: 20px;}
</style>