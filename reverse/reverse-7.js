arr = "Welcome to Javavascript".split(" ")
for(let i=0; i<arr.length; i++)
{
    arr[i] = arr[i].split("").reverse().join("");
}
str = arr.join(" ")
console.log(str)    