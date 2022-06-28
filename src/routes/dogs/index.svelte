<script>
	import { marked } from 'marked';
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';
	import { content } from './content-example';

	const rich_text = astToHtmlString({
		content,

		renderers: {
			bold: (props) => `<strong>${props.children}</strong>`,
			Asset: {
				application: () => `<div><p>Asset</p></div>`,
				text: () => `<div><p>text plain</p></div>`
			}
		}
	});

	export let dogs;
</script>

<h1>Dogs Archive</h1>

{#each dogs.dogs as { breed, excerpt, info, rich_text }}
	<h2>{breed}</h2>
	<p>{excerpt}</p>

	{@html marked.parse(info)}

	{@html rich_text}
{/each}
