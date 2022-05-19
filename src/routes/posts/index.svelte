<script>
	export let posts;
</script>

{JSON.stringify(posts)}

<svelte:head>
	<title>Amy Blog</title>
</svelte:head>

<p>stopped 1:04:40 mins in</p>

<h1 class="text-4xl mb-10 font-extrabold">It Works For Me!</h1>
<!-- You have access to below FROM the index.json.js query BEFORE-->

{#each posts as { title, slug, excerpt, coverImage, tags }}
	<div class="card text-center shadow-2xl mb-20">
		<figure class="px-10 pt-10">
			//you must have to use the expression symbol $ inside of a template literal?
			<img class="rounded-xl" src={coverImage.url} alt={`Cover image for ${title}`} />
		</figure>

		<div class="card-body">
			<h2 class="title">{title}</h2>

			<p>{excerpt}</p>
			<div class="flex justify-center mt-5 space-x-2">
				{#each tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>

			<!-- <div class="justify-center card-actions">
				<a href={`/posts/${slug}`} class="btn btn-outline btn-primary"> Read &rAarr; </a>
			</div> -->
		</div>
	</div>
{/each}
