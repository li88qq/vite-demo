<template>
    <div>
        <h1>首页</h1>
        <router-link to="'/test">测试页面</router-link>
        <hr/>
        <router-link to="'/tableTest">table测试</router-link>
        <hr/>
        <router-link to="'/vditor">vditor测试</router-link>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    export default defineComponent({
        name: "Index"
    })
</script>

<style scoped lang="less">

</style>