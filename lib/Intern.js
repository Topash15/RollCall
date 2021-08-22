class Intern{
    constructor(name, id, email, role, officeNumber, github, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
}

Intern.prototype.getName = function(){
    return this.name;
}

Intern.prototype.getId = function(){
    return this.id;
}

Intern.prototype.getEmail = function(){
    return this.email;
}

Intern.prototype.getRole = function(){
    return this.role;
}

Intern.prototype.getSchool = function(){
    return this.school;
}


module.exports = Intern;