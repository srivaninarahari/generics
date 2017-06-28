interface student1 {
    name: string;
    
}

interface student2 {
    name : string;
    year : number;
}
//generics type  t  with  class  college
class College<T> {
    children: T[];
    constructor() {
        this.children = [];
    }
}
// intialized  students   data
let student1Data : student1 = { name: "sreevani"};
let student2Data : student2 = { name : "priyanka", year : 2014};

let students1Data: College<student1> = new  College<student1>();
let  students2Data:  College<student1> = new  College<student2>();
students1Data.children.push(student1Data );// push  the  values  to  class
 students2Data.children.push(student2Data );// push  the  values  to  class
console.log(students1Data.children);
console.log(students2Data.children);