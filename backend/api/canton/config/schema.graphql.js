module.exports = {
  query: 'cantonByAbbr(locale: String!, abbreviation: String!): Pages',
  resolver: {
    Query: {
      cantonByAbbr: {
        description: 'Return a canton with a given abbreviation',
        resolver: 'application::canton.canton.findOne',
      },
    },
  },
}
