var a = "Hey ";
first();
console.log(b);

function first() {
    var b = "Hello ";
    second();

    function second() {
        var c = "Hi";
        console.log(a + b + c);
    }
}