module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://arabfest-be.onrender.com',  // Use your Render deployment URL here
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});