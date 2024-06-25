module.exports = {
  //
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 7,
    amountLimit: 150,
    apolloServer: {
      tracing: false,
    },
  },
}
