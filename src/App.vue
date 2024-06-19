<!--
 * @Author: weisheng
 * @Date: 2023-03-09 19:23:03
 * @LastEditTime: 2024-05-14 10:12:50
 * @LastEditors: weisheng
 * @Description: 
 * @FilePath: \wot-starter-retail\src\App.vue
 * 记得注释
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import useUpdateManager from './composables/useUpdateManager'
useUpdateManager()

onLaunch((ctx) => {
  console.log('App Launch')
})
onShow(() => {
  uni.hideTabBar()
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
page {
  --wot-tabs-nav-line-bg-color: red;
}
</style>
