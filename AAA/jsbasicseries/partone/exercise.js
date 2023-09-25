//using '||', the 'or'. 

name = 'naruto'
name = 'sasuke'
name = 'sakura'

if (name === "naruto" || name === "sasuke") {
    console.log("You are a ninja of the Hidden Leaf.")
} else {
    console.log("What village are you from?")
}

/*
'switch' can be used instead of 'if else', and is similar to if else.

switch(expression) {
    case x:
    code block
    break;
    case y:
    code block
    break;
    default:
    code block
}
*/

name2 = "midas"

switch(name2) {
    case "midas":
        console.log("you are my cat");
        break;
    case "titania":
        console.log("my first kitty");
        break;
    default:
        console.log("do you want to be my cat?");
}
