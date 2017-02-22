var express = require('express');
var app = express();

// start app
app.listen(3000, function(error) {
  if (!error) {
    console.log(`App is running on port: 8000! Build something amazing!`);
  }
});
