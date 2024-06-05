import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import schema from '@/graphql/schema.json'
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema,
})

export default ({ req, app }) => {
  return {
    httpEndpoint: 'http://0.0.0.0:1337/graphql',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
