<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import useUpdateManager from './composables/useUpdateManager'
useUpdateManager()

onLaunch((ctx) => {
  console.log('App Launch')
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
</style>
