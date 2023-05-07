module.exports = {
  query: 'pageBySlug(locale: String!, slug: String!): Pages',
  resolver: {
    Query: {
      pageBySlug: {
        description: 'Return a page with a given slug',
        resolver: 'application::pages.pages.findOne',
      },
    },
  },
}
