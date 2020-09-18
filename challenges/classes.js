// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(att){
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
        volume(){
            return this.length * this.width * this.height;
        }
        surfaceArea() {
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        }
}

class Child extends CuboidMaker{
    constructor(ChildAtt){
        super(ChildAtt);
    }
}

const cuboidOne = new CuboidMaker({
    length: 5,
    width: 5,
    height: 4
})

const cuboidTwo = new Child({
    length: 4,
    width: 5,
    height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidOne.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//****checked in pen and it works. Not sure why it says I already declared a CuboidMaker.***
