<script>
	import { marked } from 'marked';
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

	const content = {
		children: [
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Hello World'
					}
				]
			}
		]
	};

	const html = astToHtmlString({
		content
	});

	export let dogs;
</script>

<h1>Dogs Archive</h1>

{#each dogs.dogs as { breed, excerpt, info }}
	<h2>{breed}</h2>
	<p>{excerpt}</p>

	{@html marked.parse(info)}
	<p>rich text should appear after this</p>

	<!-- below is needed -->
	{@html html}
{/each}
