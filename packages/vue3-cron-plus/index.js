import vue3CronPlus_ from "./index.vue";
import './index.css'

const components = [vue3CronPlus_];

const install = function(Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const vue3CronPlus = vue3CronPlus_;

export default {
  install,
};
