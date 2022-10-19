const myName = "pinks"

const length = myName.length

let res = ""

for(let i=length-1; i>=0; i--){
    res += myName[i]
}

console.log(res)