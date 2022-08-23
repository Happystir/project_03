const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'my_db_01'
}) 

//检测数据库是否链接成功
// db.query('select 1',function(err,res){
//     if(err){
//         return console.log(err.message)
//     }

//     console.log(res)
// })


//查询数据
// db.query('select * from users',function(err,res){
//     if(err)
//         return console.log(err.message)
//     console.log(res)
// })


//插入数据
// const user = {username: 'xxxx', password:'111111'}

// const sqlstr='insert into users (username,password) values(?,?)'

// db.query(sqlstr,[user.username,user.password],function(err,res){
//     if(err)
//         return console.log(err.message)

//     if(res.affectedRows===1){
//         console.log('插入成功')
//     }    
    
// })


//简化插入数据
// const user = {username: 'xxxx', password:'111111'}
// const sqlstr='insert into users set ?'

// db.query(sqlstr,user,function(err,res){
//     if(err)
//         return console.log(err.message)

//     if(res.affectedRows===1){
//         console.log('插入成功')
//     }    
    
// })


//简化更新数据
// const user = {id: 5, username: 'ssxx', password:'123456'}

// const sqlstr='update users set ? where id=?'

// db.query(sqlstr,[user,user.id],function(err,res){
//     if(err)
//         return console.log(err.message)

//     if(res.affectedRows===1){
//         console.log('更新数据成功')
//     }    
    
// })


//更新数据
// const sqlstr='update users set username=?, password=? where id=?'

// db.query(sqlstr,[user.username, user.password, user.id],function(err,res){
//     if(err)
//         return console.log(err.message)

//     if(res.affectedRows===1){
//         console.log('更新数据成功')
//     }    
    
// })


//删除数据
const sqlstr= 'delete from users where id=?'
db.query(sqlstr,5,function(err,res){
    if(err)
        return console.log(err.message)

    if(res.affectedRows===1){
        console.log('删除数据成功')
    }    
    
})
