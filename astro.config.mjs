import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
	site: 'https://fm-designo.nguyenhphuc.com',
	integrations: [tailwind(), sitemap(), image(), solidJs()],
})
