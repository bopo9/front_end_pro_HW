function Student(name, faculty, marks){
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
    this.getAvgMark = getAvgMark;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
}

function getInfo(){
    return `Name: ${this.name} Faculty: ${this.faculty} Rating: ${this.getTotal()}`
}

function getTotal(){
    return this.marks.reduce((a,b) => {return a + b});
}

function getAvgMark(){
    return this.getTotal() /  this.marks.length;
}

function getMaxMark(){
    return Math.max(...this.marks);
}

function getMinMark(){
    return Math.min(...this.marks);
}

const student = new Student('Boris', 'JavaScript', [2,2,3,4,5,10]);

console.log(student.getTotal());