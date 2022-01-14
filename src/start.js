global.__root = __dirname

require('./lib/initialize-app')(() => {
	require('./app')()
	console.log(`config:`,config)
})