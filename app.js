const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const router=require('./Routes/index');
app.use('/',express.static(path.join(__dirname,'public')));

app.use('/',[
  router
]);
app.listen(port, () => {
    console.log(`server started and listening on *: http://localhost:${port}`);
  });