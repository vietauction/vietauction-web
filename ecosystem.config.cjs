module.exports = {
  apps: [
    {
      name: "vietauction-web",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        API_BASE_URL:
          process.env.API_BASE_URL ||
          "https://api.103.140.249.73.sslip.io",
        API_REQUEST_TIMEOUT_MS:
          process.env.API_REQUEST_TIMEOUT_MS || "10000",
      },
    },
  ],
};
