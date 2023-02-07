let user = {
    name:"Firz",
    surname:'Odilov',
    lastname: 'farxodovich',
    age: 18,
    gender:'male',
    scholl: 45,
    adress:"shoxrux mirzo 3/4",
    phone: 915554430,
    nullTwo: true,
    nullOne: false,
    status: "student",
    visa: 'USA'
}

let car = {
    model: 'Malibu 2',
    engine: '2.5L twin turbo',
    color: 'white',
    hp: 300
}

let NewObject = Object.assign({}, user, {car})

console.log(NewObject);

let KeyObject = Object.keys(NewObject)

console.log(KeyObject);

let ValuesObject = Object.values(NewObject)

console.log(ValuesObject);

let TotalObject = KeyObject.concat(ValuesObject)

console.log(TotalObject);

    let totalString = TotalObject.filter(n => typeof n === 'string')
    
    console.log(totalString);
    
    let totalNumber = TotalObject.filter(n => typeof n === 'number')
    
    console.log(totalNumber);
    
    let totalBoolean = TotalObject.filter(n => typeof n === 'boolean')
    
    console.log(totalBoolean);
    
    let totalObject = TotalObject.filter(n => typeof n === 'object')
    
    console.log(totalObject);
    