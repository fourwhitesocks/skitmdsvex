<script>
	import fields from '$lib/data/fields.json';
</script>

<div class="fields">
	<h2>My JSON fields</h2>
	<!-- We can access the fileds default import which is an array directly in the code -->
	{#each fields as { title, excerpt }, index}
		<h2>{title}</h2>
		<p><strong>{excerpt}</strong></p>

		<!-- <img src={image} alt="some alt text here" width="500" /> -->
	{/each}
</div>
