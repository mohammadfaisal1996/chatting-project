const path=require('path');
const express=require('express');
const pagespath=path.join(__dirname,"/../pages");
const port=process.env.PORT || 4433;
const app =express();

app.use(express.static(pagespath));

app.listen(port,() => {
    console.log('connection to port'+port);
});