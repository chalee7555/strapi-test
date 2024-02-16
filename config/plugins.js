module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://strapi-test-opal.vercel.app/",
        apiToken: "prj_sdgTkmCcDvnknbSya6uVPAXzYdR7",
        appFilter: "strapi-test",
        teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });