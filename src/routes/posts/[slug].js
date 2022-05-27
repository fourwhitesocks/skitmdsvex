
import { query } from '$lib/data/db'


export async function get() {
//look at https://graphcms.com/docs/api-reference/content-api/queries#fetching-a-single-entry
 const  post  = await query(`
     
 
    ($slug: String!) 
     
    
    post(where: { slug: $slug }) {
      excerpt
      title
      slug
    }
}

  `)

return {
  body: {
    post 
}

};
}