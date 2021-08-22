class Engineer{
    constructor(name, id, email, role, officeNumber, github, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
}

Engineer.prototype.getName = function(){
    return this.name;
}

Engineer.prototype.getId = function(){
    return this.id;
}

Engineer.prototype.getEmail = function(){
    return this.email;
}

Engineer.prototype.getRole = function(){
    return this.role;
}

Engineer.prototype.getGithub = function(){
    return this.github;
}

const engineer = new Engineer('Jeff', 0, "email", 'Engineer', null, 'Github', null);
console.log(engineer);


module.exports = Engineer;