const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')

console.log(first,second)


writeFileSync('./content/helloworld.txt','Hello World',{flag:'a'})



const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/helloworld.txt',
        `${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})