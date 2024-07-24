/*
 * @Author: weisheng
 * @Date: 2023-03-21 22:49:24
 * @LastEditTime: 2024-07-24 21:01:41
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /wot-starter-retail/vite.config.ts
 * 记得注释
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

import Components from '@uni-helper/vite-plugin-uni-components'

import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'

const isH5 = process.env?.UNI_PLATFORM === 'h5'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/wot-starter-retail/' : './',
  plugins: [
    Components({
      resolvers: [WotResolver()]
    }),
    uni(),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'pinia',
        {
          from: 'uni-mini-router',
          imports: ['createRouter', 'useRouter', 'useRoute']
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/store'],
      eslintrc: {
        enabled: true,
        globalsPropValue: true
      }
    })
  ]
  // css: {
  //   postcss: {
  //     plugins: [
  //       // 设计稿宽度375px
  //       // 375/100 = px/vw
  //       // px/rpx = viewportWidth/100
  //       // px/rpx = 1/2
  //       // viewportWidth = 50
  //       pxToViewport({
  //         // 要转化的单位
  //         unitToConvert: 'px',
  //         // UI设计稿的大小
  //         viewportWidth: 50,
  //         // 转换后的精度
  //         unitPrecision: 1,
  //         // 转换后的单位
  //         viewportUnit: 'rpx',
  //         // 字体转换后的单位
  //         fontViewportUnit: 'rpx',
  //         // 能转换的属性，*表示所有属性，!border表示border不转
  //         propList: ['*'],
  //         // 指定不转换为视窗单位的类名，
  //         selectorBlackList: ['ignore-'],
  //         // 最小转换的值，小于等于1不转
  //         minPixelValue: 1,
  //         // 是否在媒体查询的css代码中也进行转换，默认false
  //         mediaQuery: false,
  //         // 是否转换后直接更换属性值
  //         replace: true,
  //         // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  //         exclude: [],
  //         // 包含那些文件或者特定文件
  //         include: [],
  //         // 是否处理横屏情况
  //         landscape: false
  //       })
  //       // pxToViewport({
  //       //   unitToConvert: 'rpx',
  //       //   viewportWidth: 750,
  //       //   unitPrecision: 3,
  //       //   viewportUnit: 'vw',
  //       //   minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
  //       //   mediaQuery: false, // 允许在媒体查询中转换`px`
  //       //   fontViewportUnit: 'vw' //字体使用的视口单位
  //       // })
  //     ]
  //   }
  // }
})
