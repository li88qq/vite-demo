<template>
  <div>
    <a-card>
      <div>
        <a-button @click="getTimestamp">调用子组件方法获取当前时间戳</a-button>
      </div>
    </a-card>

    <ChildComp></ChildComp>
    <div>
      <p>props属性</p>
    </div>
    <div>
      <p>ctx属性</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import ChildComp from '/@/components/ChildComp.vue'

export default defineComponent({
  name: 'ComponentTest',
  components: {ChildComp},
  setup(props, ctx) {

    //调用子组件方法
    const getTimestamp = () => {

    }

    onMounted(() => {
      console.log(props)
      console.log(ctx)
    })
    return {getTimestamp}
  }
})
</script>

<style scoped lang="less">

</style>