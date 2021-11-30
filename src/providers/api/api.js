var urllib = require('urllib')
var http = require('http')

module.exports = () => {
	return {
		request: function(req, cb) {
			var endpoint = ''
			let url = config.api.url
			req = req || {}

			if((req.url || '').substr(0, 4) == 'http') {
				url = req.url
			} else if(req.endpoint) {
				url += req.endpoint
			} else {
				Object.keys(req.params || {}).forEach((key, index) => {
					url += '/' + req.params[key]
				})

			}

			console.log(`url:`, url)
			let token = req.token || (req.session || {}).token || (req.body || {}).token || (req.query || {}).token || (req.headers || {})['x-access-token'] || (req.headers || {})['token'] || ''
			let headers = {
				'Content-Type': 'application/json; charset=utf-8',
				'token': token
			}

			let data = req.query || {}
			data = Object.assign({}, data, req.body || {})

			var options = {
				method: req.method || 'GET',
				headers: headers,
				rejectUnauthorized: false,
				dataType: 'json',
				dataAsQueryString: (req.method || 'GET') == 'GET' ? true : false,
				data: data
			}

			urllib.request(url, options, (error, body, response) => {
				if(!error) {
					if(typeof body == 'string') {
						try {
							var resp = JSON.parse(body)
							if(resp.success)
								return cb(null, resp)
							else
								return cb(resp.error || { code: 'ERROR', message: 'Rest-Helper hata' })

						} catch (e) {
							if(cb) {
								servisCalisiyorMu(e, cb)
							}
						}
					} else {
						if(body.success) {
							return cb(null, body)
						} else {
							return cb(body.error || { code: 'ERROR', message: 'Rest-Helper hata' })
						}
					}

				} else {
					if(error) {
						if(cb)
							return servisCalisiyorMu(error, cb)
						else
							return
					}
				}
			})
		},
		downloadFile: function(req, res, cb) {
			var endpoint = ''
			let url = config.api.url
			req = req || {}

			if((req.url || '').substr(0, 4) == 'http') {
				url = req.url
			} else if(req.endpoint) {
				url += req.endpoint
			} else {
				Object.keys(req.params || {}).forEach((key, index) => {
					url += '/' + req.params[key]
				})

			}

			
			let token = req.token || (req.session || {}).token || (req.body || {}).token || (req.query || {}).token || (req.headers || {})['x-access-token'] || (req.headers || {})['token'] || ''

			if(url.indexOf('?') < 0)
				url += `?token=${token}`

			var tmpFile = path.join(os.tmpdir(), `${uuid.v4()}.portal`)

			const file = fs.createWriteStream(tmpFile)

			const request = http.get(url, (response) => {
				// check if response is success
				if(response.statusCode !== 200) {
					return cb({ code: 'DOWNLOAD_ERROR', message: 'Response status was ' + response.statusCode })
				}

				response.pipe(file)
			})
			file.on('finish', () => {

				file.close()
				res.setHeader('Content-Type', 'application/xml; charset=UTF-8')
				res.sendFile(tmpFile, {}, (err) => {
					fs.unlinkSync(tmpFile)
				})

			});

			request.on('error', (err) => {
				if(fs.existsSync(tmpFile)) {
					fs.unlinkSync(tmpFile)
				}


				return cb(err)
			});

			file.on('error', (err) => {
				fs.unlinkSync(tmpFile)
				return cb(err)
			})
		}
	}
}


function servisCalisiyorMu(err, cb) {
	errorLog(err)
	if(err) {
		if(err.code != undefined) {
			if(err.code === 'ECONNREFUSED') {
				let errObj = {
					application: config.name,
					code: err.code,
					message: `${err.address || ''}:${err.port || 0} Servis calismiyor!`
				}

				mail.sendErrorMail(`${(new Date()).yyyymmddhhmmss()} Rest Service Error`, errObj)
				if(cb) {
					return cb(errObj)
				}
			}
		}
	}
	if(cb) {
		cb(err)
	}

}