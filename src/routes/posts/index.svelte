<script>
	export let posts;
</script>

<h1>Posts Archive</h1>

{#each posts.posts as { title, image, excerpt, slug }}
	<a href={`/posts/${slug}`}>
		<h2>{title}</h2>
	</a>
	<p>{excerpt}</p>
	<img src={image.url} alt="Girl in a jacket" />
{/each}
