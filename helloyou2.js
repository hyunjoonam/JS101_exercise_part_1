function hello(name) {
    if (name === undefined) {
        return "Hello, World!";
    }
    else {        
        return "Hello, " + name + "!";
    }
}

console.log(hello('Mustache'));
console.log(hello());