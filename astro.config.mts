import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const siteUrl:string = import.meta.env.SITE_URL;
const basePath:string = import.meta.env.BASE;

// https://astro.build/config
export default defineConfig({
	site: siteUrl || 'https://rockem.github.io',
	base: basePath || 'my-photography-portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});
