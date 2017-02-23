import Express from 'express';
const app = new Express();

import React from 'react';
import { match, RouterContext } from 'react-router';

app.use((req, res, next) => {
  res.set('Content-Type', 'text/html')
     .status(200)
     .end(`<!doctype html><html><body>Hello World</body></html>`);
});

// start app
app.listen(3000, (error) => {
  if (!error) {
    console.log('App is running on port: 3000! Build something amazing!');
  }
});

export default app;
