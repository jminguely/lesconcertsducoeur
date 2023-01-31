module.exports = {
  //
  graphql: {
    endpoint: '/graphqldev',
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 150,
    apolloServer: {
      tracing: false,
    },
  },
};
