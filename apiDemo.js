const express = require('express')

const app = express()
app.use(express.urlencoded({extended:false}))

const router = require('./router.js')

app.use('/api',router)

app.listen(8080,function(){
    console.log('服务启动....')
})