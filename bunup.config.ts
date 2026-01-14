import { defineConfig } from 'bunup'

export default defineConfig({
	entry: ['src/index.tsx'],
	dts: true,
	jsx: {
		runtime: 'automatic',
	},
	// Ensure production JSX runtime is used
	define: {
		'process.env.NODE_ENV': '"production"',
	},
})
