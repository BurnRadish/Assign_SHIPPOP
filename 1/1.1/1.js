function Hello(firstName, lastName){
    if(typeof(firstName) != "string" || typeof(lastName) != "string"){
        console.log("Please enter string")
    }
    else{
        if(firstName === "Shippop"){
            console.log("Best Online Shipping Platform")
        }else{
            console.log("Hello Shippop, My name is " + firstName + " " + lastName)
        }
    }
}

Hello(1, 2);
Hello("Shippop", "Company");
Hello("Hello", "Company");