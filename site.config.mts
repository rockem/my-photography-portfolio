import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'ES',
	favicon: 'favicon.ico',
	owner: 'Eli Segal',
	profileImage: 'profile-1.png',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/rockem',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/lesegal/',
			icon: Instagram,
		} as SocialLink,
	],
};
