<script>
	export let dogs;
</script>

<h1>Dogs Archive</h1>

{#each dogs.dogs as { breed, excerpt }}
	<!-- <a href="/dogs/{slug}"> 
		<h2>{breed}</h2>
	</a>-->
	<h2>{breed}</h2>
	<p>{excerpt}</p>
	<!-- <img src={image.url} alt="Girl in a jacket" /> -->
{/each}
