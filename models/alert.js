var jsf = require('json-schema-faker');
var faker = require('faker');

jsf.extend('faker', () => faker);

const schema = require('../schemas/alert.json');

const alerts = [];

for (var i = 0; i < 100; i++) {
    alerts.push(jsf(schema));
}

module.exports = {
    alerts
};