//import { client } from '$lib/data/graph'
import { query } from '$lib/data/db'

//import { request, gql } from 'graphql-request';

export async function get() {

 const  posts  = await query(`


    posts {
      title
      excerpt
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
