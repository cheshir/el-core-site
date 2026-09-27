import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: { manifest: true },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: [
        'el-core.eu',
        'localhost',
        'dev.el-core-site.orb.local',
        'web.el-core-site.orb.local',
      ],
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
  };
});
