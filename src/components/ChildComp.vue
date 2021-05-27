<template>
  <div>
    {{ timestamp }}
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'ChildComp',
  setup() {
    const timestamp = ref('')

    const reload = () => {
      timestamp.value = new Date().getTime() + ''
    }
    return {timestamp}
  }
})
</script>

<style scoped>

</style>