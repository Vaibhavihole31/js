async function fun(){
    const promise = new Promise((resolve,reject) =>{
        let num = 0;
        for(let i=0; i<10000000000; i++)
        {
            num++;
        }
        resolve(num)
        // reject('mai nahi karunga');
    });

    return promise
}

fun()

 .then((val)=>{
    console.log(val);
})

.catch((err)=>{
    console.log(err);
})

console.log("secound task");