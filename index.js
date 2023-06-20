function receivesAFunction(favouritefood){
    favouritefood();
}
function mycallbruv(){
    console.log('pasta is my favourite food ')
}
receivesAFunction(mycallbruv);

function returnsANamedFunction(){
    return function namedFunction(){
        console.log('this is my named function');
    };
}
const myFunction = returnsANamedFunction();
myFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log('anonymous function');
    };
}
 returnsAnAnonymousFunction();