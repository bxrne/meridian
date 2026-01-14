import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
	integrations: [
		starlight({
			title: 'meridian',
			description: 'contemporary industrial style component library',
			social: {
				github: 'https://github.com/bxrne/meridian',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: '' },
						{ label: 'Installation', slug: 'getting-started' },
					],
				},
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
			],
		}),
		react(),
	],
})
