// Uncomment each function to see the example (Note: for examples on String, Array, Date, etc - refer to the online notes)

/////////////////////
// Code Examples
/////////////////////

//showObjectLiteralNotation();
//showClassKeyword();
//showErrorObject();

/////////////////////
// Example Functions:
/////////////////////

function showObjectLiteralNotation() {

    console.log("\n-----------------------");
    console.log("Object Literal Notation");
    console.log("-----------------------\n");

    // Create an "architect" object using 
    // "Object Literal" notation

    var architect = {
        name: "Joe",
        age: 34,
        occupation: "Architect",
        setAge: function (newAge) { this.age = newAge },
        setName: function (newName) { this.name = newName },
        outputNameDelay: function(){
            setTimeout(()=>{
                console.log(this.name);
            },1000);
        }
    };

    // Create two new architect objects, using "architect"
    // as their prototype

    var architect1 = Object.create(architect);
    var architect2 = Object.create(architect);

    // Call the 'setName' method on Architect2

    architect2.setName("Mary");

    console.log("architect1.name: " + architect1.name);
    console.log("architect2.name: " + architect2.name);

    architect1.outputNameDelay();

}

function showClassKeyword(){

    console.log("\n-----------------------");
    console.log("Class Keyword");
    console.log("-----------------------\n");
    
    class architect{
        constructor(setName, setAge){
            this.name = setName;
            this.age = setAge;
            this.occupation = "architect";
        }

        setName(newName){ this.name = newName }
        setAge(newAge){ this.age = newAge }
        getName(){ return this.name }
        getAge(){ return this.age }
        outputNameDelay(){
            setTimeout(()=>{
                console.log(this.name);
            },1000);
        }
    }
    
    var architect1 = new architect("Joe", 34);
    var architect2 = new architect("Mary", 49);

    console.log("architect1.name: " + architect1.name);
    console.log("architect1.getName()): " + architect1.getName());
    console.log("architect2.getName(): " + architect2.getName());

    architect1.outputNameDelay();
}



function showErrorObject() {

    console.log("\n-----------------------");
    console.log("ErrorObject");
    console.log("-----------------------\n");

    // Using built in functionality

    let x = 30, y = 0;

    let z = x / y;

    if (isFinite(z)) {
        console.log("success! " + x + "/" + y + "=" + z);
    } else {
        console.log(x + " is not divisible by " + y);
    }

    // Using try, catch & finally to catch an exception

    const PI = 3.14159;

    console.log("trying to change PI!");

    try {
        PI = 99;
    } catch (ex) {
        console.log("uh oh, an error occurred: " + ex.message);
        // outputs: uh oh, an error occurred: Assignment to constant variable.
    } finally {
        console.log("always execute code in this block");
    }

    console.log("Alas, it cannot be done, PI remains: " + PI);

    // throw and catch a with a custom error

    function divide(x, y) {
        if (y == 0) {
            throw new Error("Division by Zero!");
        }
        return x / y;
    }

    let a = 3, b = 0, c;

    try {
        c = divide(a, b);
    } catch (ex) {
        console.log("uh oh, an error occurred: " + ex.message);
        c = NaN;
    }

    console.log(a + " / " + b + " = " + c);
}







