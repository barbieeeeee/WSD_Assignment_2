function reversal() {
    let mainString = document.getElementById("reverse").value;
    let reverseString = "";

    for (let i = mainString.length - 1; i >= 0; i--) {
        reverseString += mainString[i];

    }
    alert("Reverse of String is : " + reverseString);

}

function palin() {

    let main = document.getElementById("palindrome").value;
    let rev = main.split("").reverse().join("");

    if (main === rev) {
        alert("The input value is a Palindrome");
    }
    else {
        alert("This is not a Palindrome");
    }

}

function tipCalc() {
    let amount = parseInt(document.getElementById("amount").value);
    let tip = parseInt(document.getElementById("tip").value);

    //let final = parseInt((amount + (amount * tip / 100)));

    alert(`The totla maount to be paid is: ${(amount + (amount * tip / 100))}`);



}
