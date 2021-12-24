//var loginHelper = require('./login-helper')
console.log(`config.basePaths:`, config.basePaths)
module.exports = (app) => {

	firstRoutes(app)

	setRoutes(app, '/api/downloadFile/:func/:param1/:param2/:param3', localApiDownload)
	setRoutes(app, '/api/:func/:param1/:param2/:param3', localApi)

	setRoutes(app, '/dbapi/downloadFile/:func/:param1/:param2/:param3', localDbApiDownload)
	setRoutes(app, '/dbapi/:func/:param1/:param2/:param3', localDbApi)

	pageRoutes(app)

	// app.use((req, res, next)=>{
	// 	res.status(404).json({ success:false, error:{code:'404',message:'function not found'}})
	// })

	// app.use((err,req, res)=>{
	// 	errorPage(req,res,err)
	// })

}

function firstRoutes(app) {
	app.all('/*', (req, res, next) => {
		next()
	})

	setRoutes(app, '/', (req, res, next) => {
		if(req.session.token) {
			res.redirect(req.basePath + '/haham#/dashboard/main?mid=0')
		} else {
			res.redirect(req.basePath + '/login')
		}
	})


	setRoutes(app, '/changedb', function(req, res) {
		if(req.query.token)
			req.session.token = req.query.token
		let sid = req.query.sid || req.session.sessionId || ''


		if(!req.session.token) {
			res.redirect(req.basePath + '/login')
		} else {
			api.request({ endpoint: '/session/changedb', method: 'POST', token: req.session.token || '', body: { db: req.query.db || req.session.dbId || '', sid: sid } }, (err, resp) => {
				if(!err) {
					Object.keys(resp.data).forEach((key) => {
						if(!['sessionId', '_id', 'token', 'username', 'role'].includes())
							req.session[key] = resp.data[key]
					})
					if(config.ispiyonService)
						if(config.ispiyonService.enabled)
							resp.data.ispiyonServiceUrl = config.ispiyonService.url || ''

					resp.data.login = {
						url: config.passport_login || ''
					}

					resp.data.basePath=req.basePath
					res.render('_common/passport', { data: resp.data, basePath:req.basePath })

				} else {
					errorPage(req, res, err)
				}
			})
		}
	})
	

	setRoutes(app, '/login', function(req, res) {
		try {
			if(!req.query.auth) {
				// let retUrl=req.query.ret || `//${getBaseURI(req)}`
				let retUrl=`//${getBaseURI(req)}`
				res.redirect(`${config.passport_login}?ret=${retUrl}`)
			} else {
				let auth = JSON.parse(decodeURIComponent(req.query.auth))

				api.request({ endpoint: '/session', method: 'POST', token: auth.token || '' }, (err, resp) => {
					if(!err) {
						Object.keys(resp.data).forEach((key) => {
							if(!['sessionId', '_id', 'token', 'username', 'role'].includes(key))
								req.session[key] = resp.data[key]
						})
						req.session.sessionId = resp.data._id
						req.session.token = auth.token || ''
						req.session.username = auth.username || ''
						req.session.role = auth.role || ''

						if(config.ispiyonService)
							if(config.ispiyonService.enabled)
								resp.data.ispiyonServiceUrl = config.ispiyonService.url || ''

						resp.data.login = {
							url: config.passport_login || ''
						}
						resp.data.basePath=req.basePath
						res.render('_common/passport', { data: resp.data, basePath:req.basePath })

					} else {
						errorPage(req, res, err)
					}
				})
			}
		} catch (tryErr) {
			errorPage(req, res, tryErr)
		}

	})

	setRoutes(app, '/logout', function(req, res) {
		if((req.session.token || '') == '') {
			res.redirect(req.basePath + '/')
		} else {
			req.session.token = null
			req.session.dbId = ''
			req.session.dbName = ''
			req.session.username = ''
			req.session.role = ''
			res.redirect(req.basePath + '/')
		}
	})

}


function showReqObject(key, req, level = 0) {
	if(level > 3) return
	if(key.substr(0, 1) == '_' || key == 'stack') return

	if(req == null) {
		console.log(`${'. '.repeat(level)}${key}: ${req}`)
	} else if(['number', 'string', 'boolean', 'undefined'].includes(typeof req) || typeof req.getMonth === 'function') {
		console.log(`${'. '.repeat(level)}${key}: ${req}`)
	} else {
		if(typeof req == 'function') {
			console.log(`${'. '.repeat(level)}${key}: FONKSIYON`)
		} else if(Array.isArray(req)) {
			console.log(`${'. '.repeat(level)}${key}: [`)
			req.forEach((e) => {
				showReqObject(key, e, level + 1)
			})
			console.log(`${'. '.repeat(level)}],`)
		} else if(typeof req == 'object') {
			if(level == 0)
				console.log(`{`)
			else
				console.log(`${'. '.repeat(level)}${key}: {`)
			Object.keys(req).sort().forEach((key2) => {
				showReqObject(key2, req[key2], level + 1)
			})
			console.log(`${'. '.repeat(level)}},`)
		} else {
			console.log(`${'. '.repeat(level)}${key}: `, typeof req)
		}
	}
}


function setRoutes(app, route, cb1, cb2) {
	let params = route.split('/:')
	config.basePaths.forEach((p) => {
		let yol = p

		params.forEach((e, index) => {
			yol +=index==0?e:`/:${e}`

			if(cb2 != undefined) {
				app.all(yol, function(req, res, next) {
					req.basePath = p
					req.urlPath = req.path.substr(req.basePath.length)
					cb1(req, res, next)
				}, cb2)
			} else {
				app.all(yol, function(req, res, next) {
					req.basePath = p
					req.urlPath = req.path.substr(req.basePath.length)
					cb1(req, res, next)
				})
			}


		})
	})
}


function localApi(req, res) {
	api.request(req, (err, data) => {
		if(err) {
			res.status(200).json({ success: false, error: err })
		} else {
			res.status(200).json(data)
		}
	})
}

function localApiDownload(req, res) {
	api.downloadFile(req, res, (err, data) => {
		if(err) {
			res.status(403).send(err.message)
		}
	})
}

function localDbApi(req, res) {

	if(!(req.session || {}).dbId)
		return res.status(200).json({ success: false, error: { code: 'SESSION_NOT_FOUND', message: 'Oturum sonlandırılmış' } })
	let endpoint = `/${req.session.dbId}`
	Object.keys(req.params || {}).forEach((key, index) => {
		endpoint += '/' + req.params[key]
	})
	req.endpoint = endpoint
	api.request(req, (err, data) => {
		if(err) {
			res.status(200).json({ success: false, error: err })
		} else {
			res.status(200).json(data)
		}
	})
}

function localDbApiDownload(req, res) {

	if(!(req.session || {}).dbId)
		return res.status(403).send(JSON.stringify({ success: false, error: { code: 'SESSION_NOT_FOUND', message: 'Oturum sonlandırılmış' } }))
	let endpoint = `/${req.session.dbId}`
	Object.keys(req.params || {}).forEach((key, index) => {
		endpoint += '/' + req.params[key]
	})
	req.endpoint = endpoint
	console.log(`localDbApiDownload req.endpoint:`, req.endpoint)
	api.downloadFile(req, res, (err, data) => {
		if(err) {
			res.status(403).send(err.message)
		}
	})
}

function pageRoutes(app) {
	setRoutes(app, '/:page/:func/:param1/:param2/:param3', pageRoutesFunc)


	function pageRoutesFunc(req, res) {
		let pageFileName = path.join(__root, 'pages', req.params.page, `${req.params.page}.js`)
		if(!fs.existsSync(pageFileName))
			return errorPage404(req, res)

		require(pageFileName)(req, res, (err, data, view) => {
			if(!err) {
				setGeneralParams(req, res, data, (err, data) => {
					if(err)
						return errorPage(req, res, null)
					if(!data)
						data = {}

					if(view) {
						res.render(view, data)
					} else {
						let fileName = `${req.params.page}/${req.params.func || req.params.page}.ejs`
						if(fs.existsSync(path.join(__dirname, '../pages', fileName))) {
							res.render(fileName, data, (err, html) => {
								if(!err) {
									res.status(200).send(html)
								} else {
									errorPage(req, res, err)
								}
							})
						} else {
							errorPage404(req, res)
						}
					}
				})
			} else {
				return errorPage(req, res, err)
			}
		})
	}
}

function setGeneralParams(req, res, data, cb) {
	data.urlPath = req.urlPath
	data.basePath = req.basePath
	data.currentPath = req.path
	data.referer = req.referer

	data.session = req.session || {}
	data.dbId = (req.session || {}).dbId || ''
	data.dbName = (req.session || {}).dbName || ''
	data.token = req.session.token || ''
	data.name = req.session.name || ''
	data.lastName = req.session.lastName || ''
	data.gender = req.session.gender || ''

	cb(null, data)
}

function errorPage(req, res, err) {
	let data = {}
	data['title'] = 'Hata'
	data['err'] = err || { code: 404, message: 'Sayfa bulunamadi' }

	setGeneralParams(req, res, data, (err, data2) => {
		if(!err) {
			//data2['leftMenu']=[]
		} else {
			data2 = data
		}

		res.render('error/error', data2)
	})
}

function errorPage404(req, res) {
	errorPage(req, res, { code: '404', message: `Sayfa veya fonksiyon bulunamadı. Func:${req.params.page}/${req.params.func || req.params.page}` })
}