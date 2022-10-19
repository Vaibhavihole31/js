const myName = "pinks"

const nameArray = myName.split("")
let start = 0;
let end = nameArray.length - 1;

while(start<end)
{
  let temp = nameArray[start];
  nameArray[start] = nameArray[end];
  nameArray[end] = temp;
  start++;
  end--;
}

let res = "";

for(let i=0;i<nameArray.length;i++)
{
  res += nameArray[i];
}

console.log(res);