const express = require('express');
app = express()


app.set('view engine','ejs')
app.use('/', (req, res, next) => {
    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('http://localhost:5000/')
})