
import { query } from '$lib/data/db'

import { queryDogs } from '$lib/queries';

//import { request, gql } from 'graphql-request';
//shadow page endpoints js file
export async function get() {

 const  dogs  = await query(
 
  queryDogs
)

return {
  body: {
     dogs 
  }

}
};