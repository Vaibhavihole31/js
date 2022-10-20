class myClass {
    constructor(itemname,price,discount,productcode){
      
        this.itemname = itemname,
        this.price = price,
        this.discount = discount,
        this.productcode = productcode
    }

    getFullName(){
        let yourItemName = `${this.itemname} This is item name`
        return yourItemName

    }

}

let obj = new myClass("pen", 20, 2, "p10")
console.log(obj);
console.log(obj.getFullName());