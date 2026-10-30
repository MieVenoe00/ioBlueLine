// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.local(),
			name: "Manrope",
			cssVariable: "--font-manrope",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Manrope.ttf"],
						weight: "200 800",
						style: "normal",
					},
				],
			},
		},
	],
});
