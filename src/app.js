var createError = require('http-errors')
var express = require('express')
var session = require('express-session')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var engine = require('ejs-locals')
// var errorHandler = require('errorhandler')
var logger = require('morgan')
var favicon = require('serve-favicon')
var methodOverride = require('method-override')
//dfdfdf
global.app = express()
var cors = require('cors')
app.use(cors())
// var flash = require('connect-flash')

app.use(favicon(path.join(__dirname, 'assets/img/brand/favicon/favicon.ico')))

app.engine('ejs', engine)
app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(bodyParser.json({ limit: "500mb" }))
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 }))

app.use(express.static(path.join(__dirname, 'assets'), { maxAge: (60 * 1000 * 60 * 24 * 30) }))

app.use(cookieParser())
//app.use(methodOverride())

// app.set('name', require('./package').name)
// app.set('version', require('./package').version)
app.set('port', config.httpserver.port)

app.set('trust proxy', 1)
app.use(session({
	secret: 'hello world',
	resave: false,
	saveUninitialized: true,
	name: app.get('name'),
	cookie: { path: '/', httpOnly: false, secure: false, maxAge: null }
}))
// app.use(flash())


global.api = require('./providers/api/api.js')()
// global.docFormHelper = require('./lib/doc_form_helper.js')
// global.dbType = require('./assets/js/dbtypes.js').types



if(config.status != 'development') {
	process.on('uncaughtException', function(err) {
		errorLog('Caught exception: ', err)
		if(config.status != 'development') {
			mail.sendErrorMail(`${(new Date()).yyyymmddhhmmss()} ${app.get('name')} Error`, errObj)
		}
	})
}


module.exports = () => {
	require('./lib/http-server')(app, (err, server, port) => {
		require('./routes/routes')(app)
	})
}