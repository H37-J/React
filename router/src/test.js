function incre(number,callback){
    setTimeout(()=>{
        const result=number+10;
        if(callback){
            callback(result);
        }
    },1000);
}

console.log("작업 시작");
incre(0,result=>{
    console.log(result);
    incre(result,result=>{
        incre(result,result=>{
            incre(result,result=>{
                console.log(result);
                console.log("작업 완료");
            });
        });
    });
});