import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const siteUrl:string = process.env.SITE_URL || 'https://rockem.github.io';
const basePath:string = process.env.BASE ?? 'my-photography-portfolio';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: basePath,
	vite: {
		plugins: [tailwindcss()],
	},
});
