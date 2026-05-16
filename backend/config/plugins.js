module.exports = {
  //
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 5,
    amountLimit: 80,
    apolloServer: {
      tracing: false,
      formatError: (error) => {
        const message = error && error.message ? error.message : "GraphQL request failed"
        const code =
          error && error.extensions && error.extensions.code
            ? error.extensions.code
            : "INTERNAL_SERVER_ERROR"

        return {
          message,
          extensions: {
            code,
          },
        }
      },
    },
  },
}
