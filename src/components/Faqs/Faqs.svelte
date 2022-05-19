<script>
	import { onMount } from 'svelte';

	import Faq from './Faq.svelte';
	import { env } from '$utils/constants';
	let data = [];

	// get data
	onMount(async () => {
		const url = `${env.SITE_URL}/faqs/faqs.json`;
		const response = await fetch(url);
		data = await response.json();

		// sort items based on the order item in the frontmatter
		data.sort((firstEl, secondEl) => {
			return firstEl.order < secondEl.order ? -1 : firstEl.order > secondEl.order ? 1 : 0;
		});
	});

	console.log(data);
</script>

<div class="grid">
	{#if data}
		<ul class="faqs">
			{#each data as faq}
				<Faq {faq} />
			{/each}
		</ul>
	{/if}
</div>

<style>
	ul {
		list-style-type: none;
	}
</style>
