import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/main.ts'],
  dts: true,
  splitting: false,
  target: 'esnext',
  sourcemap: true,
  clean: true,
  format: ['cjs'],
  external: ['electron'],
  shims:true
})
