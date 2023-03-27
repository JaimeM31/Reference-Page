/* When the script file is loaded, execution automatically begins at the top of the file */

console.log("hello")

var player = {
    name: "steve",
    health: 100,
    inventory: "axe",
    showInfo: function(){
        console.log(this.name + " has " +this.health + " health and an " + this.inventory);
    },
    takeDamage: function(){
        this.health -=15
    }
}

var pizza = {
    size: "medium",
    toppings: "pepporoni and sausage",
    cost: 9.45,
    showInfo: function(){
        console.log("A " + this.size + " pizza with " + this.toppings + "costs $" + this.costs)
    }

}

var student = {
    firstName: "Jaime",
    lastName:"Mercado",
    showName: function(){
        console.log(this.firstName + " " + this.lastName)
    },
    age: 16,
    grade: 11,
    matric: 0711523007,
    showInfo: function(){
        console.log(this.firstName + " " + this.lastName + ", age" + this.age + ", grade" + this.grade + ", matric: " +this.matric)
    }

}
student.showName();
student.showInfo();