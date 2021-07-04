import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from '@/graphql/schema.json'
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema,
})

export default ({ req, app }) => {
  return {
    httpEndpoint: (process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : process.env.API_ENDPOINT) + '/graphql',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
