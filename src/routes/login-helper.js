var maxVersion = ''

exports.changeDb = function(req, res, cb) {
	let dbId = req.query.db || ''
	api({ endpoint: '/mydbdefines', token: req.session.token }, (err, resp) => {
		if(!err) {
			let databases = resp.data
			req.session.dbId = ''
			req.session.dbName = ''
			req.session.databases = databases
			if(dbId != '') {
				databases.forEach((d) => {
					if(d._id == dbId) {
						req.session.dbId = d._id
						req.session.dbName = d.dbName
						return
					}
				})
			}
			if(req.session.dbId == '' && databases.length > 0) {
				req.session.dbId = databases[databases.length - 1]._id
				req.session.dbName = databases[databases.length - 1].dbName
			}

			exports.getInitializeData(req, res, (err, data) => {
				if(!err) {
					res.render('_common/passport', { data: data })
				} else {
					cb(err)
				}
			})
		} else {
			cb(err)
		}
	})
}

exports.getInitializeData = function(req, res, cb) {
	maxVersion = ''
	exports.getStaticValues((err, sabitDegerler) => {
		if(dberr(err, cb)) {
			exports.getJSONPageLoader(path.join(__root, 'forms'), '.json', '', (err, holder) => {
				if(dberr(err, cb)) {
					var data = {
						version: maxVersion,
						staticValues: sabitDegerler,
						pages: holder,
						menu: menu,
						session: clone(req.session || {}),
						dbId: req.session.dbId,
						dbName: req.session.dbName,
						// sessionId: req.session._id || '',
						token: req.session.token || '',
						ispiyonServiceUrl: config.ispiyonService ? config.ispiyonService.url || '' : '',
						settings: (req.session || {}).settings || []
					}

					cb(null, data)
				}
			})
		}
	})
}

exports.getStaticValues = function(callback) {
	var fileName = path.join(__root, 'resources/static-values.json')
	var stValues = require(fileName)
	var stats = fs.statSync(fileName)
	var fileVer = (new Date(stats.mtime)).yyyymmddhhmmss().replaceAll('-', '').replaceAll(' ', '').replaceAll(':', '')
	if(fileVer > maxVersion) {
		maxVersion = fileVer
	}
	api({ endpoint: '/portal-modules', method: 'GET', body: { view: 'list' } }, (err, resp) => {
		if(!err) {
			
			stValues['modules'] = resp.data
			callback(null, stValues)
		} else {
			console.error(`getStaticValues portal-modules error:`, err)
			callback(err)
		}
	})

}


exports.getJSONPageLoader = function(folder, suffix, expression, callback) {
	try {
		var moduleHolder = {}
		var files = fs.readdirSync(folder)

		var index = 0

		function calistir(cb) {
			if(index >= files.length) {
				return cb(null)
			}
			let f = path.join(folder, files[index])
			var stats = fs.statSync(f)
			var fileVer = (new Date(stats.mtime)).yyyymmddhhmmss().replaceAll('-', '').replaceAll(' ', '').replaceAll(':', '')
			if(maxVersion == '') {
				maxVersion = fileVer
			} else if(fileVer > maxVersion) {
				maxVersion = fileVer
			}
			if(!fs.statSync(f).isDirectory()) {

				var fileName = path.basename(f)
				var apiName = fileName.substr(0, fileName.length - suffix.length)
				if(apiName != '' && (apiName + suffix) == fileName) {

					moduleHolder[apiName] = require(f)
					if(expression != '')
						eventLog(`${expression} ${apiName.cyan} loaded.`)
				}
				index++
				setTimeout(calistir, 0, cb)
			} else {
				var folderName = path.basename(f)
				moduleHolder[folderName] = {}
				exports.getJSONPageLoader(f, suffix, expression, (err, holder) => {
					if(!err) {
						moduleHolder[folderName] = holder
						index++
						setTimeout(calistir, 0, cb)
					} else {
						cb(err)
					}
				})
			}
		}

		calistir((err) => {
			if(!err) {
				callback(null, moduleHolder)
			} else {
				callback(err)
			}

		})


	} catch (e) {
		errorLog(`getJSONPageLoader Error:\r\nfolder:${folder}\r\nsuffix:${suffix}\r\nexpression:${expression}`)
		callback(e)
	}
}

exports.repairMenu = function(menu) {
	menu.forEach((m1, index1) => {
		m1.mId = `${index1}`
		//m1=repairMenuPath(m1)

		if(m1.nodes) {
			if(m1.nodes.length > 0) {
				m1.nodes.forEach((m2, index2) => {
					m2.mId = `${index1}.${index2}`
					//m2=repairMenuPath(m2)

					if(m2.nodes) {
						if(m2.nodes.length > 0) {
							m2.nodes.forEach((m3, index3) => {
								m3.mId = `${index1}.${index2}.${index3}`
								//m3=repairMenuPath(m3)
								if(m3.nodes) {
									if(m3.nodes.length > 0) {
										m3.nodes.forEach((m4, index4) => {
											m4.mId = `${index1}.${index2}.${index3}.${index4}`
											//m4=repairMenuPath(m4)
										})
									}
								}
							})
						}
					}
				})
			}
		}
	})
}

global.menu = require(path.join(__root, 'resources', 'menu.json'))
exports.repairMenu(menu)