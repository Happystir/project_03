const express = require('express')
const router = express.Router()

module.exports = router

router.get('/get',function(req,res){
    const query = req.query
    res.send({
        status: 0,
        msg: 'get请求成功',
        data: query
    })
})

router.post('/post',function(req,res){
    const body = req.body
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body
    })
})