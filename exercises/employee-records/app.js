var employees = [];

function Employee(name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "full time";
    this.printEmployeeForm = function () {
        console.log(`Name: ${name}, Job Title: ${title}, Salary: ${salary}, Status: ${this.status}`)
    };
}

var billy = new Employee("Billy", "lead1", 300)
var bob = new Employee("Bob", "lead2", 400)
var joe = new Employee("Joe", "lead3", 500)

billy.status = "contract"

employees.push(billy.name, bob.name, joe.name)

console.log(employees)