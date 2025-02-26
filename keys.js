const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const keys = Object.keys(computer); // Gets all the keys of the object
console.log(keys); // ["brand", "price", "processor", "hdd", "monitor"]