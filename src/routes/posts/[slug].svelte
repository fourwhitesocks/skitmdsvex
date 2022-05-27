<script>
	export let post;
</script>

<h1>Single post here</h1>

{#each post.post as { title, excerpt, slug }}
	<h2>{title}</h2>
	<p>{excerpt}</p>
	<p>{slug}</p>
{/each}
