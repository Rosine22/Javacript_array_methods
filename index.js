
const items = [
    { name : 'Bike',  price: 100},
    { name: 'TV'  ,   price: 200},
    { name: 'Album'  ,price: 10 },
    { name: 'Book'  , price:5   },
    { name: 'Phone' , price: 500 },
    { name: 'Computer' ,price: 1000},
    { name: 'Keyboard'  , price: 25}
    ]
 //Filter method
const filteredItmes = items.filter((item) => {
    return item.price <=100
})
console.log(filteredItmes) ;
//map method
const itemPrices = items.map((item) => {
    return item.price
})
console.log(itemPrices) ;
// find method

const foundItem = items.find((item) => {
    return item.price === 25
})
console.log(foundItem) ;
// forEach method

items.forEach((item)=> {
 console.log(item.price)
})

// some method
const hascheapItmes = items.some((item) => {
    return item.price <= 100
})
console.log(hascheapItmes) ;

//every method 

const hascheapItemes = items.every((item) => {
    return item.price <= 100
})
console.log(hascheapItemes) ;
// refuce method 

const total = items.reduce((currentTotal , item) => {
    return item.price + currentTotal
}, 0) 

console.log(total);





























