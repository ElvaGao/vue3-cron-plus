<template>
  <div class="cron">
    <h1>vue3-cron-plus例子</h1>
    <el-popover :visible="state.cronPopover" width="600px">
      <vue3CronPlus
        i18n="cn"
        @change="changeCron"
        @close="state.cronPopover = false"
        max-height="200px"
      />
      <template #reference>
        <el-input
          @click="state.cronPopover = true"
          v-model="state.cron"
          placeholder="请选择cron表达式"
        ></el-input>
      </template>
    </el-popover>
  </div>
</template>

<script>
import { reactive,defineComponent } from 'vue'
export default defineComponent ({
  name: "App",
  setup(){
    const state = reactive({
      cronPopover: false,
      cron: ''
    })
    const changeCron = (val) => {
      if(typeof(val) !== 'string') return false
      state.cron = val
    }
    const togglePopover = (bol) => {
      state.cronPopover = bol
    }
    
    return {
      state,
      changeCron,
      togglePopover
    }
  }
});
</script>

<style scoped>
.cron {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
h1 {
    font-size: 50px;
    text-align: center;
  }
</style>
