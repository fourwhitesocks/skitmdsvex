<script>
	export let posts;
</script>

<h1>Posts Archive</h1>

{#each posts.posts as { title, excerpt }}
	<h2>{title}</h2>
	<p>{excerpt}</p>
{/each}
