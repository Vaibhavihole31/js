function reverseString(str){
    arr = str.split("")
    arr.reverse()
    res = arr.join("")
    return res
  }
  console.log(reverseString("ABC"))
  console.log(reverseString("XYZ"))