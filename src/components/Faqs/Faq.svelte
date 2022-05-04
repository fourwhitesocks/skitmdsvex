<script>
	export let faq;
	import { fade, slide } from 'svelte/transition';
	let visible = false;
</script>

<li>
	<button on:click={() => (visible = !visible)} class="question">
		<img src="#" alt="bullet" class="bullet" class:close={visible} />
		{faq.question}
	</button>
	{#if visible}
		<div class="answer" transition:slide>
			{@html faq.html}
		</div>
	{/if}
</li>
