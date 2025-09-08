class Car{
    constructor(name,speed,gear){
        this.name = name;
        this.speed = speed;
        this.gear = gear;
    }
    move_forward(){

    console.log(`The ${this.name} 
        car is moving forward with speed:${this.speed}`);
    console.log("The" +this.name +
        "car is moving forward with speed:" + this.speed )
    }

    move_backward(){
    console.log(`The  ${this.name}is moving backward with speed of  ${this.speed}`); 
    }
    u_turn(){
        console.log(" Car is taking U turn")
    }
}
const car1 = new Car('remote control',50,3);
car1.move_forward();
car1.move_backward();
const car2 = new Car('key car',140,5);
car2.move_forward();
const car3 = new Car('tanker',140,5);
car2.u_turn();
