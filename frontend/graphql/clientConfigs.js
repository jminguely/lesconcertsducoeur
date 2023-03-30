import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from '@/graphql/schema.json'
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema,
})

export default ({ req, app }) => {
  return {
    httpEndpoint: process.env.NODE_ENV === 'production' ? 'https://api-new.lesconcertsducoeur.ch/graphql' : 'http://localhost:1337/graphql',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
