var Person = function() {};
Person.prototype.initialize=function(name,age)
{
    this.name=name;
    this.age=age;
}
//  create the class Teacher and a method teach
class Teacher extends Person{
    constructor(name,age){
    super(name);
    this.age=age;
    }
    teach(subject){
        console.log(this.name + ' is now teaching '+subject);
    }
}

var him=new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");

//output:Adam is now teaching Inheritance