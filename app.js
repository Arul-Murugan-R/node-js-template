const express = require('express');
app = express()


app.set('view engine','ejs')
// app.use('/login', (req, res, next) => {
//     res.render('login',{title:'login page'})
// })
app.use('/', (req, res, next) => {
    res.render('index')
})
app.listen(5000, () => {
    console.log('http://localhost:5000/')
})