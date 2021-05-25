module.exports = {
    serviceName: "Super Find a Job",
    session: {
        cookieName: 'super-find-a-job-session',
        cookieLifespan: 36000000,
        httpOnly: true,
        secure: false,
        signed: true
    },
    csrf: {
        lifespan: 36000,
        httpOnly: true,
        secure: false,
        signed: true
    },
    jobsAmount: 100
};
