module.exports = {
    apps : [{
        name: "super-find-a-job",
        script: "./index.js",
        instances: "max",
        exec_mode: "cluster",
        watch: true,
        ignore_watch: './dev',
        env: {
            NODE_ENV: "local",
            PORT: "9080",
            NODE_TLS_REJECT_UNAUTHORIZED: "0",
            CERT_FILE_PATH: "dev/certs/server.crt",
            KEY_FILE_PATH: "dev/certs/server.key",
            CA_FILE_PATH: "dev/certs/ca.crt",
            COOKIE_SECRET: "imasecret",
            DOWNSTREAM_SERVICES: [
            ]
        },
        env_production: {
            NODE_ENV: "production"
        }
    }]
};
