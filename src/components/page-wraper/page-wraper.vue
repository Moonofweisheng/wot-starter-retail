<template>
  <wd-config-provider :themeVars="themeVars">
    <wd-notify />
    <wd-toast />
    <wd-message-box />
    <privacy-popup></privacy-popup>
    <slot></slot>
    <wd-tabbar fixed :model-value="tabbarStore.getActive.name" @change="handleChange" bordered safeAreaInsetBottom placeholder>
      <wd-tabbar-item name="home" :value="tabbarStore.getTabbarItemValue('home')" title="首页" icon="home"></wd-tabbar-item>
      <wd-tabbar-item name="category" :value="tabbarStore.getTabbarItemValue('category')" title="分类" icon="app"></wd-tabbar-item>
      <wd-tabbar-item name="cart" :value="tabbarStore.getTabbarItemValue('cart')" title="购物车" icon="cart"></wd-tabbar-item>
      <wd-tabbar-item name="usercenter" :value="tabbarStore.getTabbarItemValue('usercenter')" title="个人中心" icon="user"></wd-tabbar-item>
    </wd-tabbar>
  </wd-config-provider>
</template>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import { ConfigProviderThemeVars } from 'wot-design-uni'
import { PageWraperProps } from './type'

const router = useRouter()

const props = defineProps(PageWraperProps)
const tabbarStore = useTabbarStore()

const themeVars = reactive<ConfigProviderThemeVars>({
  colorTheme: '#fa4126',
  tabsNavLineBgColor: 'red'
})

function handleChange({ value }) {
  tabbarStore.setTabbarItemActive(value)
  router.pushTab({ name: value })
}

onShow(() => {
  // #ifdef APP-PLUS
  uni.hideTabBar()
  // #endif
})
</script>
<style lang="scss" scoped></style>
