import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetUni({
      remRpx: {
        mode: 'rem2rpx'
      },
      attributify: { prefix: 'un-', prefixedOnly: true }
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
