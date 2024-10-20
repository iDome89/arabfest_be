module.exports = ({ env }) => {
  const host = env('HOST', '0.0.0.0');
  const port = env.int('PORT', 1337);
  const appKeys = env.array('APP_KEYS');
  const populateRelations = env.bool('WEBHOOKS_POPULATE_RELATIONS', false);
  const externalUrl = env('RENDER_EXTERNAL_URL', 'https://arabfest-be.onrender.com'); // Add the external URL here

  return {
    host,
    port,
    url: externalUrl, // This is important for production deployments
    app: {
      keys: appKeys,
    },
    webhooks: {
      populateRelations,
    },
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
  };
};