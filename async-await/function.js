function getcount(){
    let num = 0 
    for (let i = 0; i < 10000000000; i++) {
        num++ ; 
    }
    return num
}

const ans = getcount()
console.log(ans);