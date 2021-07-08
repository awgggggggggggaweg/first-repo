console.log(__dirname)
console.log(__filename)

//info about the current user
const os1= require('os')
const user= os1.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os1.uptime()} seconds`)

const currentOs={
    name:os1.type(),
    release:os1.release(),
    totalMem:os1.totalmem(),
    freemem:os1.freemem(),
}

console.log(currentOs)