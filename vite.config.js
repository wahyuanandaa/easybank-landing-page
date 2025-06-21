import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === "build" ? "/easybank-landing-page/" : "/",
    plugins: [react()]
  }
})
