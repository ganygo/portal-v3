
var passport=require('./passport')
var protectedFields=require('./protected-fields.json')
var appJsModifiedDate=(new Date(fs.statSync(path.join(__dirname,'../app.js')).mtime)).yyyymmddhhmmss() 

module.exports=(app)=>{

	app.all('/', (req, res, next)=>{
		res.status(200).json({ success:true, 
			data:{
				name:app.get('name'),
				version:app.get('version')
			} 
		})
	})
	
	masterControllers(app)

	pageControllers(app)

	app.use((req, res, next)=>{
		res.status(404).json({ success:false, error:{code:'404',message:'function not found'}})
	})

	app.use((err,req, res)=>{
		sendError(err,res)
	})

}

function pageControllers(app){
	app.all('/:page', function(req, res) {
		pageRander(req,res)
	})

	app.all('/:page/:func', function(req, res) {
		
		pageRander(req, res)
	})

	app.all('/:page/:func/:param1', function(req, res) {
		
		pageRander(req, res)
	})
	app.all('/:page/:func/:param1/:param2', function(req, res) {
		
		pageRander(req, res)
	})
	app.all('/:page/:func/:param1/:param2/:param3', function(req, res) {
		pageRander(req, res)
	})

	function pageRander(req,res) {
		
		require(path.join(__root,'pages',req.params.page,`${req.params.page}.js`))(req,res,(err,data,view)=>{
			if(!err){
				setGeneralParams(req,res,data, (err,data)=>{
					if(err)
						return sendError(null,res)
					if(!data)
						data={}

					if(view){
						res.render(view, data)
					}else{
						var fileName=`${req.params.page}/${req.params.func || req.params.page}.ejs`
						if(fs.existsSync(path.join(__dirname,'../pages',fileName))){
							res.render(fileName, data,(err,html)=>{
								if(!err){
									res.status(200).send(html)
								}else{
									sendError(err,res)
								}
							})
						}else{
							sendError({code:'404',message:`Sayfa veya fonksiyon bulunamadı. Func:${req.params.page}/${req.params.func || req.params.page}`},res)
						}

					}
				})
			}else{
				return sendError(err,res)
			}
		})
	}

	function setGeneralParams(req, res, data, cb){
		var referer=req.headers.referer || ''
		var currentUrl=req.protocol + '://' + req.get('host') + req.originalUrl

		data.currentUrl=req.originalUrl
		data.elvanDalton=req.session.elvanDalton || ''
		data.token=req.session.token || ''
		data.name=req.session.name || ''
		data.lastName=req.session.lastName || ''
		data.gender=req.session.gender || ''
		data.message=data.message || ''

		cb(null, data)
	}
	
}

function masterControllers(app){
	app.all('/auth', function(req, res) {
		res.status(200).json({success: true, data:`Welcome to GanyPass Authentication Service. Last modified:${appJsModifiedDate}. Your path:/auth ,Please use: /auth/:func/[:param1]/[:param2]/[:param3] . Methods: GET, POST, PUT, DELETE`})
	})

	app.all('/auth/info', function(req, res) {
		res.status(200).json({success: true, data:`Welcome to GanyPass Authentication Service. Last modified:${appJsModifiedDate}. Your path:/auth/info ,Please use: /auth/:func/[:param1]/[:param2]/[:param3] . Methods: GET, POST, PUT, DELETE`})
	})

	app.all('/auth/:func', function(req, res,next) {
		setAPIFunctions(req,res,next)
	})
	app.all('/auth/:func/:param1', function(req, res,next) {
		setAPIFunctions(req,res,next)
	})

	app.all('/auth/:func/:param1/:param2', function(req, res,next) {
		setAPIFunctions(req,res,next)
	})

	app.all('/auth/:func/:param1/:param2/:param3', function(req, res,next) {
		setAPIFunctions(req,res,next)
	})

	function setAPIFunctions(req, res,next){
		
		let ctl=getController(req.params.func)
		if(!ctl){
			return res.status(404).json({ success:false, error:{code:'404',message:'function not found'}})
		}
		passport(req,res,(err)=>sendError(err,res),(member)=>{
			ctl(member,req,res,(err)=>sendError(err,res),(data)=>{

				if(data==undefined)
					res.json({success:true})
				else if(data==null)
					res.json({success:true})
				else if(data.file!=undefined)
					downloadFile(data.file,req,res,(err)=>{sendError(err,res)})
				else if(data.fileId!=undefined)
					downloadFileId(db,data.fileId,req,res,(err)=>{sendError(err,res)})
				else{
					data=clearProtectedFields(req.params.func,data)
					res.status(200).json({ success:true, data: data })
				}
			})
		})
	}

	function getController(funcName){
		let controllerName=path.join(__root,'controllers/master',`${funcName}.controller.js`)
		if(fs.existsSync(controllerName)==false){
			return null
		}else{
			return require(controllerName)
		}
	}

}

function sendError(err,res){
	var error={code:'UNKOWN_ERROR',message:'Tanımsız hata'}
	if(typeof err=='string'){
		error.message=err
	}else if(err){
		error.code=err.code || err.name || 'ERROR'
		if(err.message)
			error.message=err.message
		else
			error.message=err.name || ''
	}
	res.status(403).json({ success:false, error:error})
}

function clearProtectedFields(funcName,data,cb){
	if(protectedFields!=undefined){
		if(protectedFields[funcName]==undefined)
			protectedFields[funcName]=protectedFields['standart']

		if(data!=undefined){
			if(Array.isArray(data)){
				data.forEach((e)=>{
					e=util.deleteObjectFields(e,protectedFields[funcName].outputFields)
				})
				
			}else{
				if(data.hasOwnProperty('docs')){
					data.docs.forEach((e)=>{
						e=util.deleteObjectFields(e,protectedFields[funcName].outputFields)
					})
				}
				data=util.deleteObjectFields(data,protectedFields[funcName].outputFields)
			}
			return data
		}else{
			return data
		}
	}else{
		return data
	}
	
}


global.error={
	param1:function(req, next){
		next({code:'WRONG_PARAMETER', message:`function:[/${req.params.func}] [/:param1] is required`})
	},
	param2:function(req, next){
		next({code:'WRONG_PARAMETER', message:`function:[/${req.params.func}/${req.params.param1}] [/:param2] is required`})
	},
	method:function(req, next){
		next({code:'WRONG_METHOD', message:`function:${req.params.func} WRONG METHOD: ${req.method}`})
	},
	auth:function(req, next){
		next({code:'AUTHENTICATION', message:`Yetki hatası`})
	},
	data:function(req, next,field){
		if(field){
			next({code:'WRONG_DATA', message:`"${field}" Yanlış ya da eksik veri`})

		}else{
			next({code:'WRONG_DATA', message:`Yanlış ya da eksik veri`})

		}
	}
}

