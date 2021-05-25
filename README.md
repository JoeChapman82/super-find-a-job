# Kickstarter Central Team UI

The UI for the Kickstarter Central Team

## Requirements

* Node version 12

## Install and run the application

### Running locally

#### In isolation
* Clone the repo into your required directory
* Navigate to the directory in a terminal
* Run `cp ./dev/env/local/{.env,.env.testing} .`
* You will need to edit the absolute paths for certs and log files in the .env and .env.testing files if running locally.
* Run `npm install --production` in the terminal
* Run `npm run start` from the terminal.
* The application will be running on port 9050 - https://localhost:9050. This can be changed in the .env file.

## Tests
Unit and Integration tests are included. If you would like to run them, first run `npm install`, then either `npm run test` for a single run or `npm run testing` to run once and then on file change.

## Creator

* **Joe Chapman** - [joechapman@working-age.digital.dwp.gov.uk](mailto:joechapman@working-age.digital.dwp.gov.uk)

## License

ISC
