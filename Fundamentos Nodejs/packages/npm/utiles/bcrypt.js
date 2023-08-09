const bcryp = require('bcrypt');

const pass = '123a/Seguro'
bcryp.hash(pass, 5, function(err, hash) {
  console.log(hash);

  bcryp.compare(pass, hash, function(err, res) {
    console.log(res);
  })
});

