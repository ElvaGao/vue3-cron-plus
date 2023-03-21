# vue3 cron plus表达式生成插件

## 目的

- vue3的cron表达式生成插件

## vue3-cron

- 参考vue3-cron实现，修改了部分功能，修改了语法，加入了cron回显

## 前提

- Vue 3.0.0+
- element-plus

## 使用

### 1. 安装

```
npm  install vue3-cron-plus
```

### 2. 引入

- 1. 先引入element-plus和相关样式，具体参考element-plus官网

- 2. 全局引入

```javascript
import vue3CronPlus from 'vue3-cron-plus'
import 'vue3-cron-plus/dist/index.css' // 引入样式
const app = createApp(App)
app.use(vue3CronPlus)
```

- 3. 局部引入

```javascript
import { vue3CronPlus } from 'vue3-cron-plus'
import 'vue3-cron-plus/dist/index.css' // 引入样式
export default {
  template: '<vue3CronPlus/>',
  components: { vue3CronPlus },
}
```

### 3. 使用

```vue
<vue3CronPlus
  @change="changeCron"
  @close="togglePopover(false)"
  max-height="400px"
  i18n="cn">
</vue3CronPlus>
```

### 4. 参数

- i18n

  - 参数 `{String} language` 目前仅支持`en|cn`

  国际化支持

- max-height

  - 参数 `{String} height`

  设定 vue3-cron-plus 的 max-height, 默认没有该属性

#### 2. 事件

- change(cronText)

  - 参数：`{String} cronText` cron 表达式的值

  当 corn 表达式的值发生变化变化时触发

- close()

  - 参数：无

  当点击 corn 表达式选择框取消按钮时触发

### 5. 查看例子
- clone项目到本地：Github地址: https://github.com/ElvaGao/vue3-cron-plus.git
- npm install，
- npm run serve

## 联系方式

邮箱 : elvasgao@126.com, Github: https://github.com/ElvaGao/vue3-cron-plus.git

如果对您有帮助, 欢迎 star

有任何问题请发 Issues 或者邮箱联系我-.- 谢谢!
