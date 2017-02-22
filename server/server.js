import Express from 'express';
const app = new Express();

// start app
app.listen(3000, (error) => {
  if (!error) {
    console.log('App is running on port: 8000! Build something amazing!');
  }
});
