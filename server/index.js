const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.port || 5000;
const fs=require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data=fs.readFileSync('./database.json');
const conf=JSON.parse(data);
const mysql=require('mysql');

const connection=mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    prot:conf.port,
    database:conf.database,
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') {
            return field.string();
        }
        return next();
    }
})  
connection.connect();

app.get('/api/customers',(req,res)=>{
    // res.send([{
    //     'id':1,
    //     'image':'https://images.mypetlife.co.kr/content/uploads/2019/08/09120550/adorable-animal-cat-2286016.jpg',
    //     'name':'호종규',
    //     'birthday':'940317',
    //     'gender':'male',
    //     'job':'개발자'
    // },
    // {
    //     'id':2,
    //     'image':'https://images.chosun.com/resizer/g8idcFcDZScJIs26gdWQJYtRQJM=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/JTRAZWPHTVEQWBAB2MFQ6IQYSI.jpg',
    //     'name':'하니',
    //     'birthday':'140312',
    //     'gender':'Female',
    //     'job':'고양이'
    // }
    // ])
    connection.query("SELECT * FROM CUSTOMER",function(err,results,fields){
        res.send(results);
        console.log(results);
    }
    );
});

app.listen(port,()=>console.log(`Listenening on port ${port}`));