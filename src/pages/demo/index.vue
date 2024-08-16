<template>
  <view>
    <wd-button @click="onOpen">打开测试</wd-button>
  </view>

  <wd-action-sheet v-model="mValue" title="标题" :lazy-render="false" @opened="onFilterShow" :safe-area-inset-bottom="false">
    <view ref="filterRef" class="wraper">
      <wd-sidebar v-model="active" @change="handleChange">
        <wd-sidebar-item v-for="(item, index) in categories" :key="index" :value="index" :label="item.label" />
      </wd-sidebar>
      <scroll-view class="flex-1" scroll-y scroll-with-animation :scroll-top="scrollTop" :throttle="false" @scroll="onScroll">
        <view v-for="(item, index) in categories" :key="index" class="category">
          <wd-cell-group :title="item.title" border>
            <wd-cell v-for="(cell, index) in item.items" :key="index" :title="cell.title" :label="cell.label">
              <wd-icon name="github-filled" size="24px"></wd-icon>
            </wd-cell>
          </wd-cell-group>
        </view>
      </scroll-view>
    </view>
  </wd-action-sheet>
</template>

<script lang="ts">
export default {
  name: 'rose-filter',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script setup lang="ts">
import { getRect, isArray } from 'wot-design-uni/components/common/util'
const mValue = ref(false)

const active = ref<number>(0)
const scrollTop = ref<number>(0)
const itemScrollTop = ref<number[]>([])

const subCategories = new Array(24).fill({ title: '标题文字', label: '这是描述这是描述' }, 0, 24)
const categories = ref([
  {
    label: '分类一',
    title: '标题一',
    items: subCategories
  },
  {
    label: '分类二',
    title: '标题二',
    items: subCategories
  },
  {
    label: '分类三',
    title: '标题三',
    items: subCategories.slice(0, 18)
  },
  {
    label: '分类四',
    title: '标题四',
    items: subCategories.slice(0, 21)
  },
  {
    label: '分类五',
    title: '标题五',
    items: subCategories
  },
  {
    label: '分类六',
    title: '标题六',
    items: subCategories.slice(0, 18)
  },
  {
    label: '分类七',
    title: '标题七',
    items: subCategories
  }
])

const { proxy } = getCurrentInstance() as any
const filterRef = ref()

const onOpen = () => {
  mValue.value = true
}

const onFilterShow = () => {
  nextTick(() => {
    getRect('.category', true, filterRef.value).then((rects) => {
      console.log('%c [ rects ]-198', 'font-size:13px; background:pink; color:#bf2c9f;', rects)
      if (isArray(rects)) {
        itemScrollTop.value = rects.map((item) => item.top || 0)
        scrollTop.value = rects[active.value].top || 0
      }
    })
  })
}

function handleChange({ value }) {
  active.value = value
  scrollTop.value = itemScrollTop.value[value]
}
function onScroll(e) {
  const { scrollTop } = e.detail
  const threshold = 50 // 下一个标题与顶部的距离
  if (scrollTop < threshold) {
    active.value = 0
    return
  }
  const index = itemScrollTop.value.findIndex((top) => top > scrollTop && top - scrollTop <= threshold)
  if (index > -1) {
    active.value = index
  }
}

onLoad(() => {
  uni.$on('refresh', (city) => {
    mValue.value = city
  }) // 监听refresh事件
})
onUnload(() => {
  uni.$off('refresh') // 移除监听
})
</script>

<style scoped>
.wraper {
  display: flex;
  height: calc(70vh - var(--window-top));
  height: calc(70vh - var(--window-top) - constant(safe-area-inset-bottom));
  height: calc(70vh - var(--window-top) - env(safe-area-inset-bottom));
}
</style>
