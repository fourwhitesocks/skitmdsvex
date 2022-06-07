
import { query } from '$lib/data/db'

export async function get() {

 const  post  =  await query(` {
     
  post($slug: String!) {
  post(where:{ slug:$slug }){
    title
    excerpt
  }
}

  `)

return {
  body: 
    post 


};
}