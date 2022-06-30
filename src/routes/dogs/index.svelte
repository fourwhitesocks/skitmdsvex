<script>
	import { marked } from 'marked';
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

	const html = astToHtmlString({
		//this is the name of my rich text field
		rich_text,

		renderers: {
			bold: (props) => `<strong>${props.children}</strong>`
		}
	});

	export let dogs;
</script>

<h1>Dogs Archive</h1>

{#each dogs.dogs as { breed, excerpt, info, rich_text }}
	<h2>{breed}</h2>
	<p>{excerpt}</p>

	{@html marked.parse(info)}
	<p>rich text should appear after this</p>

	{@html html}

	<br />
{/each}
