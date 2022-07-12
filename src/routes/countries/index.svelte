<script context="module">
	import { request, gql } from 'graphql-request';

	const query = gql`
		{
			countries {
				name
				emoji
				capital
			}
		}
	`;

	export const load = async () => {
		const data = await request('https://countries.trevorblades.com/', query);

		return {
			props: {
				data
			}
		};
	};
</script>

<script>
	export let data;
</script>

<!-- {JSON.stringify(data)}
 -->
<h1>Countries GraphQL example</h1>
<a href="https://youtu.be/Rm-mmelM6iQ" target="_blank">Web Jeda video </a>

{#each data.countries as { name, emoji, capital }}
	<p>{emoji} {name} {capital}</p>
{/each}
