//conditions

var name = 'itachi'
name = 'naruto'
name = 'pain'

if (name === 'itachi'){
    console.log("welcome itachi")
} else  if (name === 'naruto') {
    console.log("you have no sharingan")
} else {
    console.log("are you even from the leaf?")
}

var name2 = 'josh'
name2 = 'steven'
name2 = 'new guy'

if (name2 === 'josh') {
    console.log('you are my coworker')
} else if (name2 === 'steven') {
    console.log('whats good broski')
} else {
    console.log('who are you again?')
}

//More conditional statements

var value = 31

if(value % 5 === 0) {
    if (value % 7 === 0) {
        console.log("value is divisible by 5 and 7")
    }
} else {
    console.log("not divisible")
}


//two conditions in one if statement by adding '&&'
    //both conditions must be satisfied when using &&
if (value % 5 === 0 && value % 7 === 0) {
    console.log("value is divisible by 5 and 7")
} else {
    console.log("not divisible")
}