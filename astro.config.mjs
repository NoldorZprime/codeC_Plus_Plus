// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { sidebar } from './src/config/sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Code C++',
			logo: {
				src: './src/assets/cplusplus-logo.svg',
				alt: 'Code C++ Logo',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: sidebar,
		}),
	],
});
