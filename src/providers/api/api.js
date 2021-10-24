var urllib = require('urllib')

module.exports = (req, cb) => {
	var endpoint = ''
	let url = config.api.url
	req = req || {}

	if((req.url || '').substr(0,4)=='http') {
		url = req.url
	} else if(req.endpoint) {
		url+=req.endpoint
	} else {
		Object.keys(req.params || {}).forEach((key, index) => {
			url += '/' + req.params[key]
		})

	}


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

}

function servisCalisiyorMu(err, cb) {

	errorLog(err)
	if(err) {
		if(err.code != undefined) {
			if(err.code === 'ECONNREFUSED') {
				let errObj = {
					code: err.code,
					message: `${err.address || ''}:${err.port || 0} Servis calismiyor!`
				}

				//mail.sendErrorMail(`${(new Date()).yyyymmddhhmmss()} Rest Service Error`, errObj)
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