var global = {
	version: '',
	staticValues: {},
	pages: {},
	widgets: {},
	javascripts: {},
	menu: [],
	databases: [],
	dbId: '',
	dbName: '',
	// sessionId:'',
	token: '',
	ispiyonServiceUrl: '',
	settings: [],
	formOptionsLink: '',
	numberFormats: {
		money: { round: 2 },
		amount: { round: 2 },
		quantity: { round: 3 },
		price: { round: 4 }
	},
	status: '',
	basePath: ''
}
var staticValues = {}

function initHahamGlobals() {
	try {
		if(localStorage.getItem('global')) {
			global = Object.assign({}, global, JSON.parse(localStorage.getItem('global')))
			staticValues = global.staticValues
		}
	} catch (e) {
		localStorage.removeItem('global')
	}
}

initHahamGlobals()
initIspiyonService()

var hashObj = getHashObject()

function getHashObject() {
	if(window.location.hash == '')
		return {}

	let hash = window.location.hash.substr(1)
	let queryString = hash.split('?')[1] ? hash.split('?')[1] : ''
	let dizi = hash.split('?')[0].split('/')
	dizi.splice(0, 1)

	let h = {
		path: dizi.length > 1 ? `/${dizi[0]}/${dizi[1]}` : '',
		pathKey: dizi.length > 1 ? `${dizi[0]}.${dizi[1]}` : '',
		func: dizi.length > 2 ? dizi[2] : '',
		id: dizi.length > 3 ? dizi[3] : '',
		param1: dizi.length > 4 ? dizi[4] : '',
		param2: dizi.length > 5 ? dizi[5] : '',
		param3: dizi.length > 6 ? dizi[6] : '',
		query: {},
		queryString: queryString,
		module: '',
		icon: '',
		title: '',
		funcTitle: '',
		breadCrumbs: '',
		breadCrumbsHtml: '',
		settings: {}
	}
	if(h.path && h.func == '') {
		h.func = 'index'
	}

	if(queryString) {

		h.query = getAllUrlParams(queryString)
	}
	let p = getPageInfos(h)
	h = Object.assign({}, h, p)
	h['settings'] = getPageSettings(h.module)

	return h
}

function setHashObject(h) {
	let hashString = h.path || ''

	if(h.func != '' && h.func != 'index') {
		hashString += '/' + h.func
		if(h.id) {
			hashString += '/' + h.id
			if(h.param1) {
				hashString += '/' + h.param1
				if(h.param2) {
					hashString += '/' + h.param2
					if(h.param3) {
						h += '/' + h.param3
					}
				}
			}
		}
	}

	if(h.query) {
		let filterString = ''
		Object.keys(h.query).forEach((key) => {
			if(filterString != '')
				filterString += '&'
			filterString += `${key}=${encodeURIComponent2(h.query[key])}`
		})
		if(filterString != '') {
			hashString += `?${filterString}`
		}
	}

	window.location.hash = hashString
}

function getPageInfos(h = null) {
	let p = {
		module: '',
		icon: '',
		title: '',
		funcTitle: '',
		breadCrumbs: '',
		breadCrumbsHtml: ''

	}
	if(h == null) {
		h = hashObj
	}
	let breadCrumbs = []
	if((h.query.mid || '') == '') {
		breadCrumbs = getBreadCrumbsFromPath(global.menu, (h.path)) || []
	} else {
		breadCrumbs = getBreadCrumbs(global.menu, (h.query.mid)) || []
	}


	if(breadCrumbs.length > 0) {
		p.icon = breadCrumbs[breadCrumbs.length - 1].icon || ''
		p.title = breadCrumbs[breadCrumbs.length - 1].text || ''
		p.module = breadCrumbs[breadCrumbs.length - 1].module || ''

		if(h.func != '' && h.func != 'index') {
			switch (h.func) {
				case 'edit':
					p.funcTitle = 'Düzenle'
					break
				case 'addnew':
					p.funcTitle = 'Yeni'
					break
				case 'view':
					p.funcTitle = 'İzleme'
					break
				case 'print':
					p.funcTitle = 'Yazdır'
					break
				default:
					p.funcTitle = h.func
					break
			}
			breadCrumbs.push({ icon: '', text: p.funcTitle })
		}
		let seperator = ' / '

		p.breadCrumbs=breadCrumbs.join(seperator)

		p.breadCrumbsHtml=`<span class="mx-1 ellipsis">${breadCrumbs.slice(0,-1).map((e)=>e.text).join(seperator)}${breadCrumbs.length>1?seperator:''}</span><span class="active me-3">${breadCrumbs[breadCrumbs.length-1].text}</span>`

	}
	return p
}

function getModulePageName() {
	let pageName = 'page'
	let dizi = hashObj.path.split('/')
	let k = 0
	dizi.forEach((e) => {
		if(e != '') {
			if(k == 2) {
				return
			} else {
				pageName += '_' + e
				k++
			}
		}
	})

	return pageName
}


var pageSettings = {
	setItem: function(param, value) {
		try {
			let obj = JSON.parse(localStorage.getItem(`${getModulePageName()}`) || '{}')
			obj[param] = value
			localStorage.setItem(`${getModulePageName()}`, JSON.stringify(obj))
		} catch (err) {
			showError(err)
		}
	},
	getItem: function(param) {
		try {
			let obj = JSON.parse(localStorage.getItem(`${getModulePageName()}`) || '{}')
			if(obj[param] == undefined)
				obj[param] = null

			return obj[param]
		} catch (err) {
			showError(err)
			return null
		}

	}
}

function helpButton(item) {
	if((item.help || '') != '') {
		let helpUrl = item.help
		//manipulateUrl(item.help)

		return `<a href="javascript:openInNewTab('${helpUrl}')" class="skip-enter-next text-primary bold ms-2" title="Yardım ve açıklama için tıklayınız"><i class="far fa-question-circle"></i></a>`
	} else {
		return ''
	}
}

function maxLookupLength(lookup) {
	let max = 0
	Object.keys(lookup).forEach((key) => {
		if(lookup[key].length > max)
			max = lookup[key].length
	})
	return max
}

function generateFormName(name) {
	let keys = name.toString().split('.')
	if(keys.length <= 1) {
		return name
	} else {
		let s = ''
		keys.forEach((k, index) => {
			if(index == 0)
				s = k
			else
				s += `[${k}]`
		})
		return s
	}
}

function generateFormId(name) {
	if(typeof name == 'string')
		return name.replaceAll('.', '_')
	else
		return ''
}

function loadCardCollapses() {
	let kartlar = document.getElementsByClassName('card-collapse')
	let i = 0
	while(i < kartlar.length) {
		if(pageSettings.getItem(`collapse_${kartlar[i].id}`)) {
			$(`#${kartlar[i].id}`).collapse(pageSettings.getItem(`collapse_${kartlar[i].id}`))
		}
		i++
	}

	$('.card-collapse').on('show.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)

	})
	$('.card-collapse').on('hide.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)

	})

	$('.modal .card-collapse').on('show.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)
	})
	$('.modal .card-collapse').on('hide.bs.collapse', (e) => {
		pageSettings.setItem(`collapse_${e.target.id}`, e.type)
	})


}


function postMan(url, options, cb) {
	if(url.startsWith('/api') || url.startsWith('/dbapi')) {
		url = global.basePath + url
	}
	$.ajax({
		url: url,
		type: options.method || options.type || 'GET',
		dataType: options.dataType || 'json',
		data: options.data || {},
		timeout: 120000,
		success: function(result) {
			if(result.success != undefined) {
				if(result.success) {
					cb(null, result.data)
				} else {
					cb(result.error)
				}
			} else {
				cb(null, result)
			}
		},
		error: function(err) {
			console.log(`postMan Hata url:`, url)
			console.log(`postMan Hata err:`, err)
			cb(err)
		}
	})
}

function htmlEval(html, values = {}, bracketDollar = true) {
	let code = ''
	try {
		
		Object.keys(values).forEach((key) => {
			if(key!='class')
				code += `let ${key}=${JSON.stringify(values[key])}\n`
		})
		code += `return \`${html}\``
		let f = new Function(code)
		return f()
	} catch (tryErr) {}
	return html
}

function getAjax(url, labelStr = '${name}', exceptId = '', cb) {
	postMan(url, { type: 'GET', dataType: 'json' }, (err, data) => {
		if(!err) {
			let dizi = []
			if(data) {
				if(data.docs != undefined) {
					data.docs.forEach((e) => {
						let text = replaceUrlCurlyBracket(labelStr, e)
						dizi.push({ label: text, value: text, obj: e })
					})
				} else {
					if(Array.isArray(data)) {
						data.forEach((e) => {
							let text = replaceUrlCurlyBracket(labelStr, e)
							dizi.push({ label: text, value: text, obj: e })
						})
					} else {
						let text = replaceUrlCurlyBracket(labelStr, data)
						dizi.push({ label: text, value: text, obj: data })
					}
				}
			}

			if(cb) cb(null, dizi)
		} else {
			if(cb) cb(err)
		}
	})
}


function remoteLookupAutocomplete(locals) {

	if(locals.dataSource == undefined)
		return

	let searchUrl = ''
	if((locals.dataSource.search || '') != '') {
		searchUrl = replaceUrlCurlyBracket(locals.dataSource.search, { _id: locals.value })

	} else if((locals.dataSource.url || '') != '') {
		searchUrl = replaceUrlCurlyBracket(locals.dataSource.url, { _id: locals.value })
		if(searchUrl.indexOf('?') < 0) {
			searchUrl += '?search=${search}'
		} else {
			searchUrl += '&search=${search}'
		}
	}
	let idUrl = ''
	if(locals.dataSource.id || locals.dataSource.idUrl) {
		idUrl = replaceUrlCurlyBracket(locals.dataSource.id || locals.dataSource.idUrl, { _id: locals.value })

	} else if(locals.dataSource.url) {
		idUrl = replaceUrlCurlyBracket(locals.dataSource.url, { _id: locals.value })
		if(idUrl.indexOf('?') < 0) {
			idUrl += `/${locals.value}`
		} else {
			idUrl += `&id=${locals.value}`
		}
	}


	if(searchUrl == '' || idUrl == '') {
		return
	}

	let labelStr = (locals.dataSource.label || '${name}')
	let valueText = locals.valueText || ''


	$(`#${locals.id}-autocomplete-text`).autocomplete({
		source: function(request, response) {
			let typedText = encodeURIComponent2(request.term)
			// let url = searchUrl.replace('${search}', typedText).replace('{search}', typedText).replace('${mid}', q.mid).replace('{mid}', q.mid)
			let url = htmlEval(searchUrl, { search: typedText, mid: q.mid || '' })

			getAjax(url, `${labelStr}`, ``, (err, result) => {
				if(!err) {
					response(result)
				} else {
					console.error(err)
					response([])
				}
			})
		},
		select: function(event, ui) {
			$(`#${locals.id}-autocomplete-text`).val((ui.item.label || ''))
			$(`input[name="${locals.name}"]`).val(ui.item.obj._id.toString())
			$(`#${locals.id}-obj`).val(encodeURIComponent2(JSON.stringify(ui.item.obj)))
			if(locals.lookupTextField) {
				$(`input[name="${locals.lookupTextFieldName}"]`).val((ui.item.label || ''))
				// $(`#${locals.id}-original-text`).html((ui.item.label || ''))
				// $(`#${locals.id}-original-text`).attr('title', (ui.item.label || ''))
			}
			if(locals.onchange) {
				eval(`${locals.onchange}`)
			}
			return false
		}
	})


	$(`#${locals.id}-autocomplete-text`).on('change', () => {

		if($(`#${locals.id}-autocomplete-text`).val() == '') {
			$(`input[name="${locals.name}"]`).val('')
			// $(`#${locals.id}-obj`).val('')
			// if(locals.lookupTextField) {
			// 	$(`#${locals.id}-original-text`).html('')
			// 	$(`#${locals.id}-original-text`).attr('title', '')
			// }
		}
		if(locals.lookupTextField) {
			$(`input[name="${locals.lookupTextFieldName}"]`).val($(`#${locals.id}-autocomplete-text`).val())
		}
	})


	if((locals.value || '') != '') {
		let url = idUrl.replace('{mid}', q.mid)
		getAjax(url, `${labelStr}`, ``, (err, result) => {
			if(!err) {
				if(result.length > 0) {
					if(valueText == '') {
						$(`#${locals.id}-autocomplete-text`).val((result[0].label || ''))
					}

					$(`input[name="${locals.name}"]`).val(result[0].obj._id.toString())
					// $(`#${locals.id}-obj`).val(encodeURIComponent2(JSON.stringify(result[0].obj)))

					if(locals.lookupTextField) {
						$(`#${locals.id}-original-text`).html((result[0].label || ''))
						$(`#${locals.id}-original-text`).attr('title', (result[0].label || ''))
					}

				} else {
					if(valueText == '')
						$(`#${locals.id}-autocomplete-text`).val('')
					$(`input[name="${locals.name}"]`).val('')
					// $(`#${locals.id}-obj`).val('')
					// $(`#${locals.id}-original-text`).html('')
					// $(`#${locals.id}-original-text`).attr('title', '')
				}

			} else {
				$(`#${locals.id}-autocomplete-text`).val('')
				$(`#${locals.id}-autocomplete-text`).attr('placeholder', `Hata:${err.message}`)
			}
		})

	}
}



function cboEasyDateChange(value) {

	let date1 = new Date()
	let date2 = new Date()
	date1.setHours(0, 0, 0, 0)
	date1.setMinutes(-1 * (new Date()).getTimezoneOffset())
	date2.setHours(0, 0, 0, 0)
	date2.setMinutes(-1 * (new Date()).getTimezoneOffset())

	switch (value) {
		case 'today':
			break
		case 'thisWeek':
			date1 = date1.addDays(-1 * (date1.getDay() - 1))
			date2 = date2.addDays(7 - date2.getDay())
			break
		case 'thisMonth':
			date1 = date1.addDays(-1 * (date1.getDate() - 1))
			date2 = date2.lastThisMonth()
			break
		case 'lastMonth':
			date1 = new Date((new Date(date1.setMonth(date1.getMonth() - 1))).setDate(1))
			date2 = date1.lastThisMonth()
			break
		case 'last1Week':
			date1 = date1.addDays(-7)
			break

		case 'last1Month':
			date1 = new Date(date1.setMonth(date1.getMonth() - 1))
			break
		case 'last3Months':
			date1 = new Date(date1.setMonth(date1.getMonth() - 3))
			break
		case 'last6Months':
			date1 = new Date(date1.setMonth(date1.getMonth() - 6))
			break
		case 'thisYear':
			date1 = new Date(date1.getFullYear(), 0, 1)
			date2 = new Date(date2.getFullYear(), 11, 31)
			break
		case 'last1Year':
			date1 = new Date(date1.setMonth(date1.getMonth() - 12))
			break
		default:
			break
	}
	return {
		date1: date1.yyyymmdd(),
		date2: date2.yyyymmdd()
	}
}




function replaceUrlCurlyBracket(url, item) {

	return htmlEval(url, item)

	if((url || '') == '')
		return ''
	if(!(url.indexOf('{') > -1 && url.indexOf('}') > -1))
		return url
	let fieldList = []
	let dizi = url.split('}')
	dizi.forEach((e) => {
		if(e.indexOf('{') > -1) {
			fieldList.push(e.split('{')[1])
		}
	})


	fieldList.forEach((e) => {
		let e2 = e.replace('.toLowerCase()', '').replace('.toUpperCase()', '')
		let value = getPropertyByKeyPath(item, e2)

		if(value) {
			if(e.indexOf('.toLowerCase()') > -1) {
				value = value.toLowerCase()
			}
			if(e.indexOf('.toUpperCase()') > -1) {
				value = value.toUpperCase()
			}
		}

		url = url.replaceAll(`{${e}}`, value)
	})

	return url
}


function getPropertyByKeyPath(targetObj, keyPath, defaultValue) {
	if(targetObj == undefined || targetObj == null || !keyPath)
		return defaultPropertyValue(targetObj, defaultValue)

	if(keyPath.substr(0, 1) == '/')
		keyPath = keyPath.substr(1)
	if(keyPath.substr(0, 2) == './')
		keyPath = keyPath.substr(2)
	keyPath = keyPath.replaceAll('/', '.')

	let keys = keyPath.split('.')
	if(keys.length == 0)
		return defaultPropertyValue(undefined, defaultValue)
	keys = keys.reverse()
	let subObject = targetObj
	while(keys.length) {
		let k = keys.pop()
		if(typeof subObject[k] == 'undefined' || subObject[k] == null) {
			return defaultPropertyValue(undefined, defaultValue)
		} else {
			subObject = subObject[k]
		}
	}




	return defaultPropertyValue(subObject, defaultValue)
}

function defaultPropertyValue(subObject, defaultValue) {
	if(!subObject && defaultValue != undefined) {
		if(typeof defaultValue == 'string') {
			let s1 = defaultValue.indexOf('${')
			let s2 = defaultValue.indexOf('}', s1)
			if(s1 > -1 && s2 > -1) {
				let s = eval('`' + defaultValue + '`')
				subObject = s
			} else {
				subObject = defaultValue
			}
		} else {
			subObject = defaultValue
		}
	}
	return subObject
}

function getFormData(divId) {
	let liste = document.querySelectorAll(`${divId} input, select`)
	let obj = {}
	let i = 0
	while(i < liste.length) {
		let e = liste[i]
		let key = e.getAttribute('data-field')
		let dataType = e.getAttribute('data-type') || ''
		if(key) {
			if(key.indexOf('.-1.') < 0) {
				if(['number', 'money', 'total', 'quantity', 'amount', 'price'].includes(dataType)) {
					obj[key] = Number(e.value)
				} else if(dataType == 'boolean') {
					if(e.type == 'checkbox') {
						obj[key] = e.checked
					} else {
						obj[key] = Boolean(e.value)
					}
				} else {
					obj[key] = e.value
				}
			}
		}
		i++
	}
	return listObjectToObject(obj)
}

// function getFormData1111(divId) {
// 	let obj = listObjectToObject($(`${divId}`).serializeArray().reduce((obj, item) => ({ ...obj, ...{
// 			[item.name.replaceAll('[', '.').replaceAll(']', '')]: item.value } }), {}))
// 	$(`${divId} input[type=checkbox]`).each(function() {
// 		if(this.name) {
// 			let key = this.name
// 			key = key.replaceAll('[', '').replaceAll(']', '.')
// 			if(key.substr(-1) == '.') {
// 				key = key.substr(0, key.length - 1)
// 			}
// 			obj[key] = this.checked
// 		}
// 	})
// 	return obj
// }

function getRemoteData(item, cb) {

	let data = item.value || ''

	if(item.value == undefined) {
		switch (item.type) {
			case 'grid':
				data = []
				let ps = pageSettings.getItem(`pageSize`)
				if(ps) {
					hashObj.query.pageSize = ps
					setHashObject(hashObj)
				}
				break
			case 'form':
				data = {}
				break
			case 'filter':
				data = {}
				break

			case 'number':
			case 'money':
				data = 0
				break
			case 'boolean':
				data = false
				break
			default:
				data = ''
				break
		}
	}

	if(item.dataSource == undefined) {
		return cb(null, data)
	}

	let url = ''
	if(hashObj.func == 'print') {
		url = item.dataSource.printUrl || item.dataSource.url || ''
	} else {
		url = item.dataSource.url || ''
	}

	let bHashParamsEkle = false
	if(hashObj.func == 'addnew') {
		return cb(null, item)
	} else {
		if(hashObj.id) {
			url = `${url.split('?')[0]}/${hashObj.id}`
			if(url.split('?')[1]) {
				url += '?' + url.split('?')[1]
			}
		}
	}
	let filterString = ''
	Object.keys(hashObj.query).forEach((key) => {
		if(key != 'mid') {
			if(filterString != '')
				filterString += '&'
			filterString += `${key}=${encodeURIComponent2(hashObj.query[key])}`
		}
	})
	if(filterString != '') {
		url += `${url.indexOf('?')>-1?'&':'?'}${filterString}`
	}

	if((url || '') == '')
		return cb(null, data)

	postMan(url, { type: item.dataSource.method || 'GET', dataType: 'json' }, (err, data) => {
		if(!err) {
			cb(null, data)
		} else {
			console.error(`getRemoteData error err:`, err)
			cb(err)
		}
	})
}


function cariKart_changed(prefix) {
	if(prefix.indexOf('.party.') < 0)
		prefix += '.party.'
	let fieldList = [
		"person.firstName.value",
		"person.familyName.value",
		"partyIdentification.0.ID.value",
		"partyIdentification.0.ID.attr.schemeID",
		"partyTaxScheme.taxScheme.name.value",
		"postalAddress.streetName.value",
		"postalAddress.buildingNumber.value",
		"postalAddress.buildingName.value",
		"postalAddress.blockName.value",
		"postalAddress.room.value",
		"postalAddress.citySubdivisionName.value",
		"postalAddress.district.value",
		"postalAddress.cityName.value",
		"postalAddress.region.value",
		"postalAddress.country.identificationCode.value",
		"postalAddress.country.name.value",
		"postalAddress.postalZone.value",
		"contact.telephone.value",
		"contact.telefax.value",
		"contact.electronicMail.value",
		"websiteURI.value"
	]

	let cari = $(`#${generateFormId(prefix+'_id')}-obj`).val()
	if(cari == undefined)
		return
	let obj = JSON.parse(decodeURIComponent(cari))


	fieldList.forEach((e) => {
		let componentFieldName = `${prefix}${e}`

		let value = getPropertyByKeyPath(obj, e)
		if(value != undefined) {
			if($(`#${generateFormId(componentFieldName)}`).val() != undefined) {
				$(`#${generateFormId(componentFieldName)}`).val(value)
			}
		}
	})

	if(($(`#${generateFormId(prefix + 'postalAddress.country.identificationCode.value')}`).val() || '') == '') {
		$(`#${generateFormId(prefix + 'postalAddress.country.identificationCode.value')}`).val('TR')

	}
}

function countryCode_changed(prefix) {
	let fieldName = `${prefix}postalAddress.country.identificationCode.value`
	let fieldNameCountryName = `${prefix}postalAddress.country.name.value`
	let countryCode = $(`#${generateFormId(fieldName)}`).val() || ''
	let countryText = $(`#${generateFormId(fieldName)} option:selected`).text() || ''

	if(countryCode != '') {
		$(`#${generateFormId(fieldNameCountryName)}`).val(countryText)

	}
}


function formSave(dataSource, formData) {
	let url = dataSource.url
	let method = 'GET'
	if(hashObj.func == 'addnew') {
		method = 'POST'
	} else if(hashObj.func == 'edit' && hashObj.id) {
		method = 'PUT'
		url = `${url.split('?')[0]}/${hashObj.id}`
		if(url.split('?')[1]) {
			url += '?' + url.split[1]
		}
	} else {
		method = 'PUT'
	}

	if(method == 'POST') {
		pageSettings.setItem('lastRecord', formData)
	}

	postMan(url, { type: method, data: formData, dataType: 'json' }, (err, data) => {
		if(!err) {
			if(hashObj.func == 'index') {
				alertX('Kayıt başarılı :-)')
			} else {
				let h = Object.assign({}, hashObj, { func: 'index', query: { page: 1 } })
				setHashObject(h)
			}
		} else {
			showError(err)
		}
	})
}

function collectFieldList(item) {
	let fieldList = {}
	if(item.tabs) {
		item.tabs.forEach((tab) => {
			if(tab.fields) {
				let f = collectFieldList(tab.fields)
				fieldList = Object.assign({}, fieldList, f)
			}
		})

	} else if(item.fields) {

		Object.keys(item.fields).forEach((key) => {
			if(item.fields[key].fields) {
				let f = collectFieldList(item.fields[key])

				if(item.fields[key].type == 'grid') {

					Object.keys(f).forEach((k) => {
						f[k].id = f[k].id || generateFormId(key + '.' + k)
						f[k].name = f[k].name || generateFormName(key + '.' + k)
					})
					let f2 = {}
					f2[key] = f
					fieldList = Object.assign({}, fieldList, f2)
				} else {
					Object.keys(f).forEach((k) => {
						f[k].id = f[k].id || generateFormId(k)
						f[k].name = f[k].name || generateFormName(k)
					})
					fieldList = Object.assign({}, fieldList, f)
				}

			} else {
				fieldList[key] = item.fields[key]
				fieldList[key].id = fieldList[key].id || generateFormId(key)
				fieldList[key].name = fieldList[key].name || generateFormName(key)
			}
		})
	}
	return fieldList
}


function refreshRemoteList(remoteList) {

	Object.keys(remoteList).forEach((e) => {
		let idList = []
		Object.keys(remoteList[e].list).forEach((key) => {
			idList.push(key)
		})

		let url = `${remoteList[e].dataSource.url.split('?')[0]}/${idList.join(',')}`
		getAjax(url, remoteList[e].dataSource.label || '${name}', '', (err, dizi) => {
			if(!err) {

				Object.keys(remoteList[e].list).forEach((key) => {
					dizi.forEach((d) => {
						if(d.obj._id == key) {
							$(remoteList[e].list[key].cellId).html(replaceUrlCurlyBracket((remoteList[e].dataSource.label || '${name}'), d.obj))
							if(remoteList[e].list[key].lookupTextField) {

								$(`input[name="${remoteList[e].list[key].lookupTextField}"]`).val(d.value)
							}
						}
					})
				})

			} else {
				console.error('getAjax err:', err)
			}
		})
	})
}

var keyupTimer = 0
var timerActive = false

function runTimer(selector, prefix = '') {
	console.log(`keyupTimer:`, keyupTimer)
	if(keyupTimer == 0) {
		timerActive = false
		return
	}

	if(keyupTimer >= 3) {
		keyupTimer = 0
		timerActive = false
		runFilter(selector, prefix)
	} else {
		timerActive = true
		setTimeout(() => {
			keyupTimer++

			runTimer(selector, prefix)


		}, 800)
	}
}

function runFilter(selector, prefix = '') {
	let h = getHashObject()
	let obj = getDivData(selector, prefix)
	if(obj) {
		obj = objectToListObject(obj)
	}

	Object.keys(obj).forEach((key) => {
		if(h.query[key] != undefined && obj[key] == '') {
			h.query[key] = undefined
			delete h.query[key]
		} else {
			if(obj[key] != '') {
				h.query[key] = obj[key]
			}
		}
	})
	if(h.query.page) {
		h.query.page = 1
	}

	let bFarkli = false
	if(Object.keys(h.query).length != Object.keys(hashObj.query).length) {
		bFarkli = true
	} else {
		Object.keys(h.query).forEach((key) => {
			if(h.query[key] != hashObj.query[key]) {
				bFarkli = true
				return
			}
		})
	}


	if(!bFarkli) {
		window.onhashchange()
	} else {
		setHashObject(h)
	}
}






function menuLink(path, filter) {
	let s = `#${path}`

	if(!filter) {
		filter = {}
	}
	if(filter) {
		let filterString = ''
		Object.keys(filter).forEach((key) => {
			if(filterString != '')
				filterString += '&'
			filterString += `${key}=${encodeURIComponent2(filter[key])}`
		})
		s += '?' + filterString
	}
	return s
}

function openPage(url, title) {
	history.pushState('', 'New Page Title', '${s}')
}

var q = getAllUrlParams()

function getAllUrlParams(query = null) {
	let q = {}
	let queryString = query || window.location.search
	if(queryString.substr(0, 1) != '?') {
		queryString = '?' + queryString
	}
	let dizi = queryString.split('&')
	dizi.forEach((d) => {
		let key = d.split('=')[0]
		if(key[0] == '?')
			key = key.substr(1)

		let value = getUrlParameter(key, queryString)

		if(value != '') {

			q[key] = value
		}
	})
	return q
}

function getUrlParameter(name, query = null) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
	let regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
	let results = regex.exec(query || location.search)

	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function generateLeftMenu(leftMenu) {
	if(!hashObj)
		return ''

	let mid = (hashObj.query || {}).mid || '0'

	let s = ``
	leftMenu.forEach((item, index) => {
		s += generateMenu(item, mid)
	})
	return s
}

function generateMenu(menu, mid, parent) {
	let s = ``
	let bActive = false
	if(menu.visible === false)
		return ''

	if(typeof menu.nodes != 'undefined') {
		if(menu.nodes.length > 0) {
			bActive = false
			menu.nodes.forEach((e) => {
				if(e.mId == mid) {
					bActive = true
					return
				}
				if(typeof e.nodes != 'undefined') {
					e.nodes.forEach((e2) => {
						if(e2.mId == mid) {
							bActive = true
							return
						}
					})
				}
			})
			s = `\n`
			if(bActive) {
				s += `<a class="nav-link ${(parent || '')!=''?'ms-4':''} " href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapse${menu.mId.replaceAll('.','-')}" aria-expanded="false" aria-controls="pagesCollapse${menu.mId.replaceAll('.','-')}">\n`
			} else {
				s += `<a class="nav-link ${(parent || '')!=''?'ms-4':''} collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapse${menu.mId.replaceAll('.','-')}" aria-expanded="false" aria-controls="pagesCollapse${menu.mId.replaceAll('.','-')}">\n`
			}

			s += `<i class="${menu.icon || 'fas fa-table'}"></i>${menu.text} <i class="fas fa-angle-down float-end"></i>
			</a>`

			if(bActive) {
				s += `<div class="collapse show" `
			} else {
				s += `<div class="collapse" `
			}
			if(parent) {
				s += `id="pagesCollapse${menu.mId.replaceAll('.','-')}" data-bs-parent="#pagesCollapse${parent.mId.replaceAll('.','-')}">`
				s += `<nav class="nav ms-4 accordion" id="navId${menu.mId.replaceAll('.','-')}">
				`
			} else {
				s += `id="pagesCollapse${menu.mId.replaceAll('.','-')}" data-bs-parent="#sidenavAccordion">`
				s += `<nav class="nav accordion" id="navId${menu.mId.replaceAll('.','-')}">
				`
			}


			menu.nodes.forEach((e) => {
				s += generateMenu(e, mid, menu)
			})
			s += `
			</nav>
			</div>`
		}
		return s
	} else {
		if(menu.mId == mid) {
			bActive = true
		}
		s = `\n`

		let link = menuLink(menu.path, { mid: menu.mId })
		if(menu.path == '/settings/form-options') {
			global.formOptionsLink = link

		}
		s += `<a id="menu${menu.mId.replaceAll('.','-')}" class="nav-link ${(parent || '')!=''?'ms-4':''} navigation ${bActive?'active':''}" href="${link}">`

		s += `<i class="${menu.icon || 'fas fa-table'}"></i>${menu.text}
		</a>
		`
		return s

	}
}

function getBreadCrumbs(leftMenu, mid) {
	let menuItem = []

	leftMenu.forEach((m1) => {
		if(menuItem.length > 0)
			return
		if(m1.mId == mid) {
			menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
			return
		}

		if(m1.nodes) {
			m1.nodes.forEach((m2) => {

				if(m2.mId == mid) {
					menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
					menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
					return
				}
				if(m2.nodes) {
					m2.nodes.forEach((m3) => {
						if(m3.mId == mid) {
							menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
							menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
							menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
							return
						}
						if(m3.nodes) {
							m3.nodes.forEach((m4) => {
								if(m4.mId == mid) {
									menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
									menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
									menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
									menuItem.push({ text: m4.text, icon: m4.icon, mId: m4.mId, module: m4.module || '' })
									return
								}
							})
						}
					})
				}
			})
		}
	})

	return menuItem
}

function getBreadCrumbsFromPath(leftMenu, path) {
	let menuItem = []

	leftMenu.forEach((m1) => {
		if(menuItem.length > 0)
			return
		if(m1.path == path) {
			menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
			return
		}

		if(m1.nodes) {
			m1.nodes.forEach((m2) => {

				if(m2.path == path) {
					menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
					menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
					return
				}
				if(m2.nodes) {
					m2.nodes.forEach((m3) => {
						if(m3.path == path) {
							menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
							menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
							menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
							return
						}
						if(m3.nodes) {
							m3.nodes.forEach((m4) => {
								if(m4.path == path) {
									menuItem.push({ text: m1.text, icon: m1.icon, mId: m1.mId, module: m1.module || '' })
									menuItem.push({ text: m2.text, icon: m2.icon, mId: m2.mId, module: m2.module || '' })
									menuItem.push({ text: m3.text, icon: m3.icon, mId: m3.mId, module: m3.module || '' })
									menuItem.push({ text: m4.text, icon: m4.icon, mId: m4.mId, module: m4.module || '' })
									return
								}
							})
						}
					})
				}
			})
		}
	})

	return menuItem
}


function changedb(dbId) {
	window.location.href = `${global.basePath}/changedb?db=${dbId}&r=${window.location.href}`
}

function windowPathToFieldName(path = '') {
	if(path == '')
		path = hashObj.path
	if(path.substr(0, 1) == '/')
		path = path.substr(1)
	path = path.replaceAll('/', '_')
	path = path.replaceAll('-', '_')

	return path
}


function programButtons1111(panelButtons = '') {
	let prgButtons = []
	if(hashObj.settings) {
		prgButtons = hashObj.settings.programButtons || []
	}


	if(prgButtons.length == 0 && panelButtons == '')
		return ''

	let sbuf = `<div class="button-bar mt-0 p-1 rounded justify-content-start" role="toolbar" aria-label="Toolbar with button groups">\n`
	if(panelButtons != '')
		sbuf += panelButtons

	if(prgButtons.length > 0) {
		prgButtons.forEach((e) => {
			if(e.passive == false) {
				let icon = ''
				let text = e.text || ''
				if((e.icon || '') != '') {
					icon = e.icon
				} else {
					switch (e.program.type) {
						case 'file-importer':
							icon = 'fas fa-file-import'
							break
						case 'file-exporter':
							icon = 'fas fa-file-export'
							break
						case 'connector-importer':
							icon = 'fas fa-cloud-upload-alt'
							break

						case 'connector-exporter':
							icon = 'fas fa-cloud-download-alt'
							break

						case 'email':
							icon = 'fas fa-envelope-square'
							break

						case 'sms':
							icon = 'fas fa-sms'
							break
					}
				}
				sbuf += `<a class="${e.class || 'btn btn-primary'} me-2" href="javascript:runProgram('${e.program._id}','${e.program.type}')" title="${text}">${icon!=''?'<i class="' + icon + '"></i>':''} ${text}</a>\n`
			}
		})
	}
	sbuf += `
	<input type="file" name="fileUpload" id="fileUpload" style="visibility:hidden;" accept="*.*" multiple>
	</div>
	`
	return sbuf
}

function programFileUploaderChangeEvent() {
	$("#fileUpload").change(function() {
		let reader = new FileReader()
		let fileIndex = 0
		let files = this.files
		let uploadFiles = []
		reader.addEventListener("load", function() {

			if(reader.result) {
				uploadFiles[uploadFiles.length - 1].data = reader.result.split('base64,')[1]
			}
			fileIndex++
			runReader()
		})

		function runReader() {
			if(fileIndex >= files.length) {
				document.dispatchEvent(new CustomEvent("file-upload-finished", { detail: uploadFiles }))
				return
			}
			let file = files[fileIndex]
			uploadFiles.push({ name: file.name, modifiedDate: file.lastModifiedDate, size: file.size, data: '' })

			reader.readAsDataURL(file)
		}

		runReader()
	})
}

var programId = ''
var programType = ''

document.addEventListener('file-upload-finished', function(event) {
	let data = { files: event.detail }
	runProgramAjax(data)
})

function runProgram(_id, type) {
	programId = _id
	programType = type
	if(type == 'file-importer') {
		$('#fileUpload').trigger('click')
		return
	}
	let list = []

	$(".checkSingle").each(function() {
		if(this.checked) {
			list.push({ _id: this.value })
		}
	})
	if(list.length == 0)
		return alertX('Hiç kayıt seçilmemiş')
	let data = { list: list }
	runProgramAjax(data)
}

function runProgramAjax(data) {
	postMan(`/dbapi/programs/run/${programId}`, { type: 'POST', dataType: 'json', data: data }, (err, data) => {
		if(!err) {
			console.log(`runProgramAjax data:`, data)
			if(typeof data == 'string') {
				if(programType == 'file-exporter') {
					download(`data:application/file;base64,${btoa2(data)}`, `export_${(new Date()).yyyymmddhhmmss()}.csv`, 'application/file')
					return
				} else if(programType == 'connector-exporter') {
					alertX(data, 'Bilgi', () => { window.onhashchange() })
				} else {
					alertX(data, 'Bilgi', () => { window.onhashchange() })
				}
			} else {
				alertX(data, 'Bilgi', () => { window.onhashchange() })
			}
		} else {
			showError(err)
		}
	})
}

function runPanelButtons(url, method) {

	let list = []

	$(".checkSingle").each(function() {
		if(this.checked) {
			list.push({ _id: this.value })
		}
	})
	if(list.length == 0)
		return alertX('Hiç kayıt seçilmemiş')
	let data = { list: list }

	postMan(url, { type: 'POST', dataType: 'json', data: data }, (err, data) => {
		if(!err) {
			alertX(data, () => {
				window.onhashchange()
			})
		} else {
			showError(err)
		}
	})
}



function frameYazdir(frameId) {
	let mainCtrl = document.querySelector(frameId)
	if(!mainCtrl) {
		console.log(`HATA: ${frameId} Bulunamadi`)
	}
	let iframe = mainCtrl.contentWindow || (mainCtrl.contentDocument.document || mainCtrl.contentDocument)

	iframe.focus()
	iframe.print()
}


function pencereyiKapat() {
	window.open('', '_parent', '');
	window.close()
}


function getPageSettings(module) {
	if(!global.settings)
		return []
	let obj = global.settings.find((e) => {
		if(e.module == module) {
			return true
		} else {
			return false
		}
	})

	return obj || {}
}

moment.updateLocale('en', {
	relativeTime: {
		future: "in %s",
		past: "%s önce",
		s: 'birkaç saniye',
		ss: '%d saniye',
		m: "bir dakika",
		mm: "%d dakika",
		h: "bir saat",
		hh: "%d saat",
		d: "bir gün",
		dd: "%d gün",
		w: "bir hafta",
		ww: "%d hafta",
		M: "bir ay",
		MM: "%d ay",
		y: "bir yıl",
		yy: "%d yıl"
	}
})


function initIspiyonService() {
	if(!global.ispiyonServiceUrl)
		return
	let socket = io(global.ispiyonServiceUrl, {
		reconnection: false,
		reconnectionDelay: 120000,
		reconnectionDelayMax: 300000
	})
	socket.on('connect', () => {
		socket.emit('I_AM_HERE', global.token, global.dbId)

	})

	socket.on('error', function(err) {
		console.log('socket io hatasi');
	})

	socket.on('connect_error', function(err) {
		console.log('Error connecting to server');
	})

	socket.on('TOTAL_UNREAD', (count, lastNotifications) => {

		if(Number(count) > 0) {
			$('#unread-notification-count').html(count)
			global.lastNotifications = lastNotifications
		} else {
			$('#unread-notification-count').html('')
			global.lastNotifications = []
		}
	})

	socket.on('NOTIFY', (text, status, icon) => {
		let message = SnackBar({
			message: (text || '').substr(0, 500),
			status: status || 'orange',
			dismissible: true,
			timeout: 3000
		})
	})
	socket.on('message', data => {
		console.log('serverdan gelen mesaj:', data)
	})

	$(document).ready(() => {

		$('#alertsDropdown').on('shown.bs.dropdown', () => {

			let s = ``
			if(global.lastNotifications) {
				global.lastNotifications.forEach((e, index) => {
					s += notificationItem(e._id, e.createdDate, e.text, e.status, e.icon)
				})
			}
			$('#last-notifications').html(s)
			$('#unread-notification-count').html('')
			global.lastNotifications = []
			socket.emit('READ_ALL') //, global.token,global.dbId)

		})

		$('#alertsDropdown').on('hidden.bs.dropdown', () => {

		})

	})
}

function notificationItem(id, notifyDate, text, status, icon) {
	let bgClass = 'bg-primary'
	switch (status || '') {
		case 'success':
			bgClass = 'bg-primary'
			icon = icon || 'fas fa-bell'
			break
		case 'error':
			bgClass = 'bg-danger'
			icon = icon || 'fas fa-times'
			break
		case 'warning':
			bgClass = 'bg-warning'
			icon = icon || 'fas fa-exclamation-triangle'
			break
	}
	let s = `
	<a id='${id}' class="notification-dropdown-item dropdown-item d-flex align-items-center" href="#">
	<div class="me-3">
	<div class="icon-circle ${bgClass}">
	<i class="${icon?icon:'fas fa-bell'} text-white"></i>
	</div>
	</div>
	<div  class="text-truncate" style="max-width:300px" >
	<div class="small text-gray-500">${moment(notifyDate).fromNow()}</div>
	<span>${text}</span>
	</div>
	</a>
	`
	return s
}

function notifyMe(text, status) {
	let message = SnackBar({
		message: text,
		status: status || 'orange',
		dismissible: true,
		timeout: 3000
	})

}

function formCalculation(divId, calcUrl) {
	if(!calcUrl) return
	$(`${divId} .formatted-number`).each(function() {
		let sbuf = $(this).val()
		$(this).attr('type', 'number')
		$(this).val(convertNumber(sbuf))
	})
	let formData = getFormData(`${divId}`)
	postMan(calcUrl, { type: 'POST', dataType: 'json', data: formData }, (err, data) => {
		if(!err) {
			setFormData(divId, data)
		} else {
			showError(err)
		}
	})
}

function setFormData(divId, data) {
	let elemanlar = document.querySelectorAll(`${divId} input, select`)
	let i = 0
	while(i < elemanlar.length) {
		let el = elemanlar[i]
		if(el.name) {
			if(el.name.indexOf('[-1]') < 0) {
				let fieldName = generateFieldName(el.name)

				if(el.type == 'checkbox') {
					let value = getPropertyByKeyPath(data, fieldName, el.checked)
					if(value != undefined) {
						el.checked = value
					}
				} else {
					let value = getPropertyByKeyPath(data, fieldName, el.value)
					if(value != undefined) {
						el.value = value
					}
				}
			}
		}
		i++
	}

	let j = 0
	let gridler = document.querySelectorAll(`${divId} div[data-type="grid"]`)
	while(j < gridler.length) {
		let table = gridler[j]
		if(table.item && table.id) {
			if(table.item.parentField) {
				table.item.value = getPropertyByKeyPath(data, table.item.parentField) || []
				gridBody(`${divId} #${table.id}`, table.item, false, () => {})
			}
		}

		j++
	}

}

function generateFieldName(name) {
	let s = name.replaceAll('][', '.').replaceAll('[', '.').replaceAll(']', '')

	return s
}

function getUrlInfo(href = window.location.href) {
	let match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
	return match && {
		href: href,
		protocol: match[1],
		host: match[2],
		hostname: match[3],
		port: match[4],
		pathname: match[5],
		search: match[6],
		hash: match[7]
	}
}

function calculate(formula, values) {
	if((formula || '') == '')
		return 0
	formula = formula.replaceAll('${', '{').replaceAll('{', '${')
	let code = `(function(){
	`
	Object.keys(values).forEach((key) => {
		code += `let ${key}=${JSON.stringify(values[key])}\n`
	})

	code += `return eval(\`${formula}\`)
	})()`

	return eval(code)
}



function scrollToTop() {
	document.querySelector('#right-side').scrollTop = 0;
}

if(localStorage.getItem('theme') == null) {
	if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		localStorage.setItem('theme', 'dark')
	} else {
		localStorage.setItem('theme', 'light')
	}
}

function changeColorScheme(theme) {
	if(theme)
		localStorage.setItem('theme', theme)

	if(localStorage.getItem('theme') == 'dark') {
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
	}
}

changeColorScheme()