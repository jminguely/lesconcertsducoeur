module.exports = {
  query: "pageBySlug(slug: String!, locale: String!): Pages",
  resolver: {
    Query: {
      pageBySlug: {
        description: "Return a page with a given slug",
        resolver: "application::pages.pages.findOne",
      },
    },
  },
};
