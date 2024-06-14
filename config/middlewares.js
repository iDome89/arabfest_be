module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "default-src": ["'self'"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("SUPABASE_URL"),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("SUPABASE_URL"),
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:1337",
        "https://arabfest.cz",
        "https://wwww.arabfest.cz",
        "http://arabfest.cz",
        "http://www.arabfest.cz",
        "http://localhost:3000",
        "https://arabfest-fe.vercel.app/",
        "https://arabfest-fe.vercel.app",
        "https://arabfest-fe-silk.vercel.app/",
        "https://arabfest-fe-silk.vercel.app"
      ], 
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
