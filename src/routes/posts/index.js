//import { client } from '$lib/data/graph'
import { query } from '$lib/data/db'

//import { request, gql } from 'graphql-request';
//shadow page endpoints js file
export async function get() {

 const  posts  = await query(`


    posts {
      title
      excerpt
      slug
    image {
      url
    }
   
  }

  
  `)

return {
  body: {
    posts 
}

};
}
