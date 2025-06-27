import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        allowedHosts: [
          'el-core.eu',
          'el-core-site.netlify.app',
          'localhost',
          'web.el-core.orb.local', 
          'dev.el-core.orb.local',
          'dev.el-core-site.orb.local',
        ]
      }
    };
});
