const faker = require('faker/locale/en_GB');
const randomNumber = require('./randomNumber');
const jobTitles = require('../config/jobTitles');
const { jobsAmount } = require('../config/main');
const jobSites = require('../config/jobSites');

module.exports = (app) => {
    let jobs = [];
    for(let i = 0; i < jobsAmount; i++) {
        let jobsite = jobSites[randomNumber(0, jobSites.length - 1)];
        jobs.push({
            title: jobTitles[randomNumber(0, jobTitles.length)],
            employer: faker.company.companyName(),
            location: faker.address.city(),
            salary: `£${(Math.round((faker.finance.amount() * 50) / 1000) * 1000)} p/a`,
            site: jobsite.site,
            href: jobsite.href
        });
    }
    app.locals.jobs = jobs;
    console.log('Jobs created!');
    return app;
}