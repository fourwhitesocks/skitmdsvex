import { query } from '$lib/data/db'
export async function get( {params }) {
 const { post } = await query(` 
     
  post(where:{ slug: "${params.slug}" }){
    title
    excerpt
    image {
      url
    }
  }
  `)

  return {
    body: {
      post
}
  }
};
