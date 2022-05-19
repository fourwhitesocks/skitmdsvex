//import {client} from '$lib/graphql-client'
import { gql } from 'graphql-request'


export const archiveQuery = gql`
        
        query Posts {
            posts {
              title
              slug
              date
              excerpt
              tags
              coverImage{
                url
              }
            }
          }
        `
        


