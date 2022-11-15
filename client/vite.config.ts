import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/server': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//         secure: false,
//         ws: true,
//         rewrite: (path) => path.replace(/^\/server/, '')
//       }
//     },
//     port: 5173
//   },
//   plugins: [react()]
// })

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    server: {
      proxy: {
        '/server': {
          target: process.env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/server/, '')
        }
      },
      port: 5173
    },
    plugins: [react()]
  })
}
