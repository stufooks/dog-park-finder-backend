const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
// const passport = require('./config/passport')()

const postsController = require('./controllers/posts')

const app = express()
app.set('port', process.env.PORT || 8080)
app.use(parser.json())
app.use(cors())
// app.use(passport.initialize())


app.use('/api/posts', postsController)

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})