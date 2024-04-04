import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'components/*': path.resolve(__dirname, './src/components/*'),
			components: path.resolve(__dirname, './src/components'),
			'hooks/*': path.resolve(__dirname, './src/hooks/*'),
			hooks: path.resolve(__dirname, './src/hooks'),
			'types/*': path.resolve(__dirname, './src/types/*'),
			types: path.resolve(__dirname, './src/types'),
			'utils/*': path.resolve(__dirname, './src/utils/*'),
			utils: path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [react()],
})
