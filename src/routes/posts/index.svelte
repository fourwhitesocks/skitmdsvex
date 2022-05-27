<script>
	export let posts;
</script>

<h1>Posts Archive</h1>

{#each posts.posts as { title, image, excerpt }}
	<h2>{title}</h2>
	<p>{excerpt}</p>
	<img src={image.url} alt="Girl in a jacket" />
{/each}
