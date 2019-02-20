const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const userController = require('./controllers/users')
const parksController = require('./controllers/parks')

const app = express()
app.set('port', process.env.PORT || 8080)
app.use(parser.json())
app.use(cors())
app.use(passport.initialize())


app.use('/users', userController)
app.use('/parks', parksController)

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})