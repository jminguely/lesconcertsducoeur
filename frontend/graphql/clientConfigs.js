import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import schema from '@/graphql/schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema,
})

export default ({ req, app }) => {
  const endpoint =
    process.env.GRAPHQL_HTTP_ENDPOINT ||
    'https://api.lesconcertsducoeur.ch/graphql'

  const timeout = Number.parseInt(process.env.APOLLO_FETCH_TIMEOUT_MS, 10) || 10000

  return {
    httpEndpoint: endpoint,
    httpLinkOptions: {
      fetchOptions: {
        timeout,
      },
    },
    cache: new InMemoryCache({ fragmentMatcher }),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  }
}
