class Circle{
    constructor(radius, color)
    {
        this.radius = radius;
        this.color = color;
    }

    getRadius()
    {
        return this.radius;
    }

    setRadius(radius)
    {
        this.radius = radius;
    }
    getColor()
    {
        return  this.color;
    }

    setColor(color)
    {
        this.color = color;
    }

    toString()
    {
        return ` Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea()
    {
        var Area = 3.14*this.radius*this.radius;
        return Area
    }

    getCircumference()
    {
        var Circumference = 2*3.14*this.radius;
        return Circumference
    }
}

const circle1 = new Circle(23,"Red")
console.log(circle1)
console.log(circle1.getRadius())
circle1.setRadius(24)
console.log(circle1.getRadius())
console.log(circle1.getCircumference())
console.log(circle1.getArea())