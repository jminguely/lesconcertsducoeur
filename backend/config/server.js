module.exports = ({ env }) => ({
  host: env("IP", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cc6d10545f8d63174896ac20273c1901"),
    },
  },
})
