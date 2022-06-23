<script>
	import { marked } from 'marked';
	export let dogs;
</script>

<h1>Dogs Archive</h1>

{#each dogs.dogs as { breed, excerpt, info }}
	<h2>{breed}</h2>
	<p>{excerpt}</p>

	{@html marked.parse(info)}
{/each}
