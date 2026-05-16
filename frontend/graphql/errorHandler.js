export default ({ graphQLErrors, networkError, operation }) => {
  const operationName = operation && operation.operationName

  if (Array.isArray(graphQLErrors) && graphQLErrors.length > 0) {
    graphQLErrors.forEach((error) => {
      const message = error && error.message ? error.message : 'Unknown GraphQL error'
      // Keep logs concise and avoid dumping full payloads in production logs.
      console.error('[Apollo][GraphQL]', operationName || 'anonymous', message)
    })
  }

  if (networkError) {
    const statusCode = networkError.statusCode || networkError.status
    const networkMessage = networkError.message || 'Unknown network error'

    if (networkMessage.includes('Unexpected token < in JSON')) {
      console.error(
        '[Apollo][Network]',
        operationName || 'anonymous',
        'Received non-JSON response from GraphQL endpoint',
        statusCode || 'no-status'
      )
      return
    }

    console.error(
      '[Apollo][Network]',
      operationName || 'anonymous',
      networkMessage,
      statusCode || 'no-status'
    )
  }
}
