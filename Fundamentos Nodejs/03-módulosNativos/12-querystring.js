const querystring = require('querystring');

const params = {
  name: 'Cristian',
  edad: 39,
  city: 'Santa Fe'
};

const query = querystring.stringify(params);

console.log(query)
