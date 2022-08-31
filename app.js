const express = require('express');
const passport = require('passport')
const session = require('express-session')
require('./auth')
function isLoggedIn (req, res, next) {
    req.user ? next() :res.status(401).send('Unauthoried')
}
app = express()
app.use(session({
    secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs')
// app.use('/login', (req, res, next) => {
//     res.render('login',{title:'login page'})
// })

app.use('/auth/google',
    passport.authenticate('google',{scope :['email','profile']})
)

app.use('/auth/callback', 
    passport.authenticate( 'google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure'
})
)
app.use('/auth/failure', (req, res) => {
    res.send('Something Went Wrong...')
})
app.use('/protected', isLoggedIn, (req, res, next) => {
    console.log(req.user)
    res.send('Hi '+req.user.displayName)
})
app.use('/logout', (req, res) => {
    // req.logout()
    req.session.destroy()
    res.send('Logout Successfully')
})

app.use('/', (req, res, next) => {
    res.render('index')
})
app.listen(5000, () => {
    console.log('http://localhost:5000/')
})