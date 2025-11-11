import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '172.16.1.250',
    allowedHosts: ['nekomaru.thddns.net'], 
    port: 5173
  }
})
