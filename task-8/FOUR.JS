class Uber{
    constructor(km, price = km*3)
    {
        this.km = km;
        this.Price = this.km*3
    }

    getPrice()
    {
        
        return `Charges for the ride is ${this.Price}`
    }

    applyDiscount(dis)
    {
        var Discount = (dis/this.Price)*100
        this.Price = this.Price-Discount
        return this.getPrice()
    }
}

const Ride1 = new Uber(30)
console.log(Ride1.getPrice())
console.log(Ride1.applyDiscount(20));