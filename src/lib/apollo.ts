import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o813v3151801xiaa6ghsvy/master',
  cache: new InMemoryCache()
})
