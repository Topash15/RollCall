class Employee{
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

Employee.prototype.getName = function(){
    return this.name;
}

Employee.prototype.getId = function(){
    return this.id;
}

Employee.prototype.getEmail = function(){
    return this.email;
}

Employee.prototype.getRole = function(){
    return this.role;
}


const employee = new Employee("Jeff", 0, "email");
console.log(employee.getName())

module.exports = Employee;