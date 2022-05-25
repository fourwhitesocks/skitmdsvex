<script>
	export let posts;
</script>

<h1>Posts Archive</h1>

{#each posts as { post }}
	<h2>{posts.title}</h2>
{/each}
