<template>
    <div class="tb">
        <p>表格测试</p>
        <a-table
                rowKey="id"
                :columns="columns"
                :data-source="tableData"
        >
            <template #typeText="{text}">
                <a-tag color="#87d068">{{text}}</a-tag>
            </template>
            <template #label="{text}">
                <a-tag color="#108ee9" v-if="text" v-for="(item,index) in text.split(',')" :key="index">{{item}}</a-tag>
            </template>
            <template #original="{text}">
                <a-tag color="#f50" v-if="text===1">原创</a-tag>
                <a-tag color="#108ee9" v-else>转载</a-tag>
            </template>
        </a-table>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref, onMounted} from 'vue'
    import * as axios from 'axios'
    import {message} from 'ant-design-vue'

    export default defineComponent({
        name: "TableTest",
        setup() {
            // {"original":1,"typeText":"html/js","timeText":"8个月前","id":28,"label":"","viewCount":15,"title":"拖动文件夹并上传","type":3,"userName":"li88qq","commentCount":0,"createDate":1586693677}
            const columns = ref([{
                dataIndex: 'id', title: 'Id'
            },
                {dataIndex: 'title', title: '文章标题'},
                {dataIndex: 'userName', title: '作者'},
                // {dataIndex: 'type', title: '类型'},
                {dataIndex: 'typeText', title: '类型', slots: {customRender: 'typeText'}},
                {dataIndex: 'label', title: '标签', slots: {customRender: 'label'}},
                {dataIndex: 'original', title: '是否原创', slots: {customRender: 'original'}},
                {dataIndex: 'viewCount', title: '阅读次数'},
                // {dataIndex: 'createDate', title: '创建时间'},
                {dataIndex: 'timeText', title: '创建时间'},

            ])
            let tableData = ref([])

            const http = axios.default
            //axios请求
            const initData = () => {
                http.get('/api/p/docs', {}).then((data) => {
                    tableData.value = data.data.data
                }, (err) => {
                    message.error('请求失败!'+err.message)
                })
            }
            onMounted(() => {
                initData()
            })

            return {columns, tableData}
        }
    })
</script>

<style scoped lang="less">
    .tb {
        padding: 50px;
    }
</style>