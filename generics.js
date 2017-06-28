//generics type  t  with  class  college
var College = (function () {
    function College() {
        this.children = [];
    }
    return College;
}());
// intialized  students   data
var student1Data = { name: "sreevani" };
var student2Data = { name: "priyanka", year: 2014 };
var students1Data = new College();
var students2Data = new College();
students1Data.children.push(student1Data); // push  the  values  to  class
students2Data.children.push(student2Data); // push  the  values  to  class
console.log(students1Data.children);
console.log(students2Data.children);
