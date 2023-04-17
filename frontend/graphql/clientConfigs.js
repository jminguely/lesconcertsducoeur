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
    httpEndpoint: 'https://api-new.lesconcertsducoeur.ch/graphql',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
