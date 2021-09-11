var loginHelper = require('./login-helper')
module.exports = (app) => {
	firstRoutes(app)

	setRoutes(app, '/api/:func/:param1/:param2/:param3', localApi)
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
	app.all('/', (req, res, next) => {
		if(req.session.token) {
			res.redirect('/haham#/dashboard/main?mid=0')
		} else {
			res.redirect('/login')
		}
	})

	app.all('/changedb', function(req, res) {
		if(req.query.token) {
			req.session.token = req.query.token
		}
		if(!req.session.token) {
			res.redirect('/login')
		} else {
			loginHelper.changeDb(req, res, (err) => {
				if(err) {
					errorPage(req, res, err)
				} else {
					res.redirect('/')
				}
			})
		}
	})

	app.all('/login', function(req, res) {
		try {
			if(!req.query.auth) {
				res.redirect(`${config.login.url}?ret=${config.base_uri}/login`)
			} else {
				var auth = JSON.parse(decodeURIComponent(req.query.auth))

				req.session.username = auth.username || ''
				req.session.role = auth.role || 'user'
				req.session.token = auth.token || ''

				loginHelper.changeDb(req, res, (err) => {
					if(err) {
						errorPage(req, res, err)
					} else {
						res.redirect('/')
					}
				})

			}
		} catch (tryErr) {
			errorPage(req, res, tryErr)
		}

	})

	app.all('/logout', function(req, res) {
		if((req.session.token || '') == '') {
			res.redirect('/')
		} else {
			req.session.token = null
			req.session.dbId = ''
			req.session.dbName = ''
			res.redirect('/')
		}
	})

}

function setRoutes(app, route, cb1, cb2) {
	let dizi = route.split('/:')
	let yol = ''
	dizi.forEach((e, index) => {
		if(index > 0) {
			yol += `/:${e}`
			if(cb1 != undefined && cb2 == undefined) {
				app.all(yol, cb1)
			} else if(cb1 != undefined && cb2 != undefined) {
				app.all(yol, cb1, cb2)
			}

		} else {
			yol += e
		}
	})
}

function localApi(req, res) {
	api(req, (err, data) => {
		if(err) {
			res.status(200).json({ success: false, error: err })
		} else {
			res.status(200).json(data)
		}
	})
}

function localDbApi(req, res) {
		
	if(!(req.session || {}).dbId)
		return res.status(200).json({ success: false, error: {code:'SESSION_NOT_FOUND',message:'Oturum sonlandırılmış'} })
	let endpoint = `/${req.session.dbId}`
	Object.keys(req.params || {}).forEach((key, index) => {
		endpoint += '/' + req.params[key]
	})
	req.endpoint=endpoint
	api(req, (err, data) => {
		if(err) {
			res.status(200).json({ success: false, error: err })
		} else {
			res.status(200).json(data)
		}
	})
}

function pageRoutes(app) {
	setRoutes(app, '/:page/:func/:param1/:param2/:param3', (req, res) => {
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
						var fileName = `${req.params.page}/${req.params.func || req.params.page}.ejs`
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
	})
}

function setGeneralParams(req, res, data, cb) {
	data.base_uri = config.base_uri
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
	var data = {}
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