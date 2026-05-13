import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시: https://<username>.github.io/<repo-name>/
// 본인 저장소 이름이 'portfolio' 라면 base를 '/portfolio/' 로 설정.
// username.github.io 형태 저장소라면 '/' 로 두면 됩니다.
export default defineConfig({
  plugins: [react()],
  base: '/introduce/',
})
