 import { gql, GraphQLClient } from 'graphql-request'

 export async function query(q) {
    const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL)
    const query = gql`{${q}}`    
    const result = await graphcms.request(query)

    return result
}  


/*  import {GraphQLClient} from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT']

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);  */