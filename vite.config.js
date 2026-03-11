import { defineConfig } from 'vite'
import core from '@newlogic-digital/core'

export default defineConfig({
  plugins: [
    core({
      format: [],
      css: {
        transformer: 'lightningcss',
      },
    }),
  ],
})
