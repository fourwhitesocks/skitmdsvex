import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */

const config = {

		
		extensions: ['.svelte', '.svx', '.md'],
		preprocess: [
			mdsvex({
				extensions: ['.md', '.svx'],
			})
		],


	kit: {
		adapter: adapter(),


		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		//i added the coma above and the vite object below
		vite: {
			resolve: {
			  alias: {
				// these are the aliases and paths to them
				'$components': path.resolve('./src/components'),
				'$routes': path.resolve('./src/routes'),
				'$utils': path.resolve('./src/utils'),
			  }
			}
		  },


	}


};

export default config;


