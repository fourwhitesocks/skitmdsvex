<script>
	import { marked } from 'marked';

	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';
	//import { content } from './content-example';

	export let dogs;

	/* const content = dogsRichTextData.dogs.map((element) => {
		return element.richText.raw;
	}); */

	console.log(dogs);
</script>

<h1>Dogs Archive</h1>

{#each dogs.dogs as { breed, excerpt, info }}
	<h2>{breed}</h2>
	<p>{excerpt}</p>

	{@html marked.parse(info)}
	<p>
		Rich text should appear after this; yep hello world and it's hot in here text are harded coded
		in...not what i'm looking for!
	</p>
{/each}

<!-- below is needed for the html rich text renderer
{@html astToHtmlString}-->
