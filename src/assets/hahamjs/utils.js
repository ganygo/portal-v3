Date.prototype.yyyymmdd = function() {
	let yyyy = this.getFullYear().toString()
	let mm = (this.getMonth() + 1).toString()
	let dd = this.getDate().toString()
	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0])
}

Date.prototype.hhmmss = function() {

	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0]) + ':' + (sec[1] ? sec : "0" + sec[0])
}

Date.prototype.yyyymmddhhmmss = function() {
	let yyyy = this.getFullYear().toString()
	let mm = (this.getMonth() + 1).toString()
	let dd = this.getDate().toString()
	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + ' ' + (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0]) + ':' + (sec[1] ? sec : "0" + sec[0])
}

Date.prototype.hhmm = function() {

	let HH = this.getHours().toString()
	let min = this.getMinutes().toString()
	let sec = this.getSeconds().toString()
	return (HH[1] ? HH : "0" + HH[0]) + ':' + (min[1] ? min : "0" + min[0])
}

Date.prototype.addDays = function(days) {
	let dat = new Date(this.valueOf())
	dat.setDate(dat.getDate() + days)
	return dat
}

Date.prototype.lastThisMonth = function() {
	let dat = new Date(this.valueOf())
	dat = new Date(dat.getFullYear(), dat.getMonth() + 1, 0)
	return dat
}

function clone(obj) {
	try{
	return JSON.parse(JSON.stringify(obj))
}catch(tryErr){
	console.error('obj:',obj)
	console.error(tryErr)
}
}


function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) { return String.fromCharCode('0x' + p1) }))
}

function b64DecodeUnicode(str) {
	return decodeURIComponent(atob(str).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
	}).join(''))
}


function btoa2(str) {
	return btoa(encodeURIComponent2(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
		return String.fromCharCode('0x' + p1)
	}))
}

function atob2(str) {
	return decodeURIComponent(atob(str).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
	}).join(''))
}


function encodeURIComponent2(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, escape)
}

function htmlEncode(str) {
	let buf = []
	if(str) {
		for(let i = str.length - 1; i >= 0; i--) {
			buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
		}
	} else {
		return ''
	}


	return buf.join('')
}

function htmlDecode(str) {
	return str.replace(/&#(\d+)/g, function(match, dec) {
		return String.fromCharCode(dec)
	})
}


function dateTimeFromText(dateStr) {
	d = new Date(dateStr)
	d.setMinutes(d.getMinutes() + (new Date()).getTimezoneOffset() * 1)

	return d;
}


Number.prototype.formatDecimal = function() {
	let c = 0;
	let d = whatDecimalPointer()
	let t = d == ',' ? '.' : ',';

	let s = _formatMoney(this, c, d, t)

	return s;
}

Number.prototype.formatMoney = function(c1) {
	let c = c1 || 2;
	let d = whatDecimalPointer()
	let t = d == ',' ? '.' : ','

	let s = _formatNumber(this, c, d, t)

	return s;
}



function _formatNumber(value, c, d, t) {
	var n = value
	c = isNaN(c) ? 2 : c
	d = d == undefined ? whatDecimalPointer() : d
	t = t == undefined ? (d == ',' ? '.' : ',') : t
	var s = n < 0 ? '-' : ''
	var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + ''
	var j = (j = i.length) > 3 ? j % 3 : 0
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
}

Number.prototype.n2 = function() {
	let sbuf = this.toString()
	if(sbuf.length == 1) {
		sbuf = '0' + sbuf
	}

	return sbuf
}


Number.prototype.round = function(precision) {
	var t = this
	var rakam = 1
	if(precision <= 0)
		return Math.round(t)
	for(var i = 0; i < precision; i++) {
		rakam = rakam * 10
	}
	var sonuc = Math.round(rakam * t) / rakam

	return sonuc

}

Number.prototype.toDigit = function(digit) {
	var t = this
	var s = t.toString()
	if(s.length < digit) {
		s = '0'.repeat(digit - s.length) + s
	}
	return s
}

Number.prototype.formatQuantity = function(c) {
	c = isNaN(c) ? 1 : c
	let d = whatDecimalPointer()
	let t = d == ',' ? '.' : ','

	let s = _formatNumber(this, c, d, t)

	return s
}

function convertNumber(text) {
	// try {
	if(typeof text == 'number')
		return text
	text = text || ''
	let replace = '[^-\\d' + whatDecimalPointer() + ']'
	let reg = new RegExp(replace, "g")

	text = text.replace(reg, '')

	// if(!isNaN(text)) {
	// 	return Number(text)
	// } else {
	// 	return 0
	// }
	if(text == '')
		text = '0'
	return Number(text)
	// } catch (err) {
	// 	console.log(`typeof text:`, typeof text)
	// 	console.log(`text:`, text)
	// 	console.log(`error:`, err)
	// }

}



function whatDecimalPointer() {
	let n = 1.1;
	n = n.toLocaleString().substring(1, 2)
	return n;
}

function pagination(c, m) {
	let current = Number(c),
		last = Number(m),
		delta = 2,
		left = current - delta,
		right = current + delta + 1,
		range = [],
		rangeWithDots = [],
		l;

	for(let i = 1; i <= last; i++) {
		if(i == 1 || i == last || i >= left && i < right) {
			range.push(i)
		}
	}


	for(let i of range) {
		if(l) {
			if(i - l == 2) {
				rangeWithDots.push(l + 1)
			} else if(i - l != 1) {
				rangeWithDots.push('...')
			}
		}
		rangeWithDots.push(i)


		l = i;
	}

	return rangeWithDots;
}


String.prototype.replaceAll = function(search, replacement) {
	let target = this
	return target.split(search).join(replacement)
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		let r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}


function listObjectToObject(listObj) {
	if(typeof listObj != 'object' || listObj == null)
		return listObj
	let obj = {}

	function calistir(anaObj, keys, parentKey = '') {
		if(anaObj[keys[0]] == undefined) {
			anaObj[keys[0]] = {}
			if(keys.length > 1) {
				if(!isNaN(keys[1])) {
					anaObj[keys[0]] = []
				}
			}
		}
		if(keys.length == 1) {
			anaObj[keys[0]] = listObj[`${(parentKey?parentKey+'.':'')}${keys[0]}`]

		} else {
			let key = keys[0]
			parentKey += (parentKey ? '.' : '') + key
			keys.splice(0, 1)
			calistir(anaObj[key], keys, parentKey)
		}
	}

	Object.keys(listObj).forEach((mainKey) => {
		let a = calistir(obj, mainKey.split('.'))
		obj = Object.assign({}, obj, a)
	})

	return obj
}


function objectToListObject(objOrj, exceptArrays = false) {
	let listObj = {}
	if(objOrj == undefined || objOrj == null)
		return listObj

	function calistir(obj, parentKey) {
		if(Array.isArray(obj) && exceptArrays) {
			if(parentKey != '') {
				listObj[parentKey] = obj
			}
		} else if(typeof obj == 'object') {
			Object.keys(obj || {}).forEach((key) => {
				let key2 = (parentKey ? parentKey + '.' : '') + key
				calistir(obj[key], key2)
			})
		} else {
			if(parentKey != '') {
				listObj[parentKey] = obj
			}
		}
	}

	calistir(objOrj)

	return listObj
}


function objectArrayControl(obj) {
	if(obj) {
		if(obj == null)
			return []
		if(Array.isArray(obj))
			return obj

		if(typeof obj == 'object') {
			let bFound = false
			let dizi = []
			Object.keys(obj).forEach((key) => {
				if(isNaN(key)) {
					bFound = true
				} else {
					dizi.push(obj[key])
				}
			})
			if(bFound == false) {
				return dizi
			} else {
				return obj
			}
		}
	} else {
		return []
	}
}

function getDivData(divId, prefix = '', eskiBirIndex = true) {
	let obj = {}
	if(!document)
		return obj
	let elements = document.querySelector(`${divId}`).querySelectorAll(`input, select`)
	let index = 0
	while(index < elements.length) {
		if(elements[index].name != '' && (elements[index].name.indexOf('[-1]') < 0 || eskiBirIndex)) {
			let key = elements[index].name.replaceAll('[', '.').replaceAll(']', '')
			let value = elements[index].value
			if(elements[index].type == 'text' && elements[index].classList.contains('formatted-number')) {
				value = convertNumber(elements[index].value)
			}
			if(elements[index].type == 'checkbox') {
				value = elements[index].checked
			}

			if(prefix != '') {
				if(key.substr(0, prefix.length) == prefix) {
					key = key.substr(prefix.length)
					if(key.substr(0, 1) == '.') {
						key = key.substr(1)
					}
				}
			}

			obj[key] = value
		}

		index++
	}
	return listObjectToObject(obj)
}


String.prototype.padding = function(n, c) {
	let val = this.valueOf()
	if(Math.abs(n) <= val.length) {
		return val
	}
	let m = Math.max((Math.abs(n) - this.length) || 0, 0)
	let pad = Array(m + 1).join(String(c || ' ').charAt(0))
	return (n < 0) ? pad + val : val + pad
}


// function htmlEval(exp, values={}) {
// 	if((exp || '') == '')
// 		return ''
// 	exp=exp.replaceAll('${','{').replaceAll('{','${')
// 	let code=`(function(){
// 	`
// 	Object.keys(values).forEach((key)=>{
// 		code+=`let ${key}=${JSON.stringify(values[key])}\n`
// 	})

// 	code+=`return \`${exp}\`
// 	})()`

// 	return code
// }


// function htmlEval11(html) {
// 	let s1 = html.indexOf('`', 0)
// 	let s2 = html.indexOf('`', s1 + 2)
// 	while(s1 > -1 && s2 > s1) {
// 		let kodParcasi = html.substr(s1, s2 - s1 + 1)
// 		try {
// 			let sbuf = eval(kodParcasi)
// 			html = html.replace(kodParcasi, sbuf)
// 		} catch {}

// 		s1 = html.indexOf('`', s2 + 1)
// 		s2 = html.indexOf('`', s1 + 2)
// 	}


// 	return html
// }