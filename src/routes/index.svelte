<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$components/Counter.svelte';
	import Faqs from '$components/Faqs/Faqs.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
		to my mdsvex<br />experiment
	</h1>

	<!-- FAQS -->
	<Faqs />

	<h2>
		<strong> My content from mdsvex should be showing here ;-)<br />.. but it's not! </strong>
	</h2>
</section>
<section />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
