import { archiveQuery } from '$lib/queries'
import { client } from '$lib/graphql-client'

/* export async function load({ fetch }) {
    //old way of doing it before shadow endpoints
    const res = await fetch('/posts.json')
    if (res.ok) {
      const { posts } = await res.json()
      return {
        props: { posts },
      }
    }
  } */

  export const get = async () => {
    //res is response and it will await the response and then return the props which are the posts but using shadow endpoints you have to use body
    
    const res = await fetch({client})

    
    
      const { posts } = await res.json()
      //const { posts } = await client.request({query})

          return {
              status: 200,
              body: { posts, },
          }
    
    };

   

     

   /*  export const get = async () => {
      try {
        const res = await fetch({client}, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: query }),
        })
        const resObj = await res.json()
        const posts = resObj.data.posts.nodes
    
        return {
          status: 200,
          body: { posts },
        }
      } catch (e) {
        return {
          status: 404,
          body: e.message,
        }
      } 
    }   */