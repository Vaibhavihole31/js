async function fun(){
    const promise = new Promise((resolve,reject) =>{
        let num = 0;
        for(let i=0; i<100000; i++)
        {
            num++;
        }
        resolve(num)
        // reject('mai nahi karunga');
    });

    return promise
}

async function main(){
    // const res = fun()
    const res = await fun()
    console.log(res);
}

main()

console.log("secound task");