import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';


const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');


const siteUrl = env.SITE_URL;
const basePath = env.BASE;

// https://astro.build/config
export default defineConfig({
	site: siteUrl || 'https://rockem.github.io',
	base: basePath ?? 'my-photography-portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});
