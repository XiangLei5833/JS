function student(name,age) {
    this.name=name;
    this.age=age;
    this.study=function() {
        alert("studying");
    };
    this.eat=function() {
        alert("eating")
    };
}

var student1 = new student('Tom','19');
var student2 = new student('Jack','20');

var x = student1.name;
var y = student1.age;
document.write(x);
document.write(y);
student1.study();

//with(student) {
//var x = name;
//var y = age;
//study();
//eat();
//}
//可使用 with 语句对其进行反复访问
