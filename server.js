const fs = require('fs');
const {
  green,
  red
} = require('chalk');

const {
  alerts
} = require('./models/alert')

const json = JSON.stringify({
  alerts
});

fs.writeFile('./db/db.json', json, err => {
  if (err) {
    console.log(red(err.message));
  } else {
    console.log(green("Mock API database generated"));

    const jsonServer = require('json-server');
    const server = jsonServer.create();
    const router = jsonServer.router('./db/db.json');
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(router);
    server.listen(3000, () => {
      console.log(green('JSON Server is running'));
    });
  }
});