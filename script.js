var cartItems = 0;
cartItems++
function addItem1() {
    var addToCart1 = document.getElementById('addItem1');
    addToCart1.style.backgroundColor = "#ffe9d6";
    addToCart1.innerHTML = 'REMOVE FROM CART';
}

function addItem2() {
    var addToCart2 = document.getElementById('addItem2');
     addToCart2.style.backgroundColor = "#ffe9d6";
     addToCart2.innerHTML = 'REMOVE FROM CART';
 }

 function addItem3() {
    var addToCart3 = document.getElementById('addItem3');
     addToCart3.style.backgroundColor = "#ffe9d6";
     addToCart3.innerHTML = 'REMOVE FROM CART';
 }

 function addItem4() {
    var addToCart4 = document.getElementById('addItem4');
     addToCart4.style.backgroundColor = "#ffe9d6";
     addToCart4.innerHTML = 'REMOVE FROM CART';
 }

 function addItem5() {
    var addToCart5 = document.getElementById('addItem5');
     addToCart5.style.backgroundColor = "#ffe9d6";
     addToCart5.innerHTML = 'REMOVE FROM CART';
 }

 function addItem6() {
    var addToCart6 = document.getElementById('addItem6');
     addToCart6.style.backgroundColor = "#ffe9d6";
     addToCart6.innerHTML = 'REMOVE FROM CART';
 }


document.getElementById('openModal').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

function nameValidation() {
    var nameInput = document.getElementById('nameInput');
    var nameError = document.getElementById('nameError');

    if (nameInput.value == "") {
        nameInput.style.borderColor = 'red';
        nameError.innerHTML = "Please enter your name";
    } else {
        nameInput.style.borderColor = 'green';
        nameError.innerHTML = "";
    }
}

function emailValidation() {
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');

    if(emailInput.value == "") {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "Please enter an Email";
    } else if(!emailInput.value.includes("@")) {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "Invalid Email";
    } else if(!emailInput.value.includes(".com")) {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "Invalid Email";
    } else {
        emailInput.style.borderColor = 'green';
        emailError.innerHTML = "";
    }
}

function numberValidation() {
    var numberInput = document.getElementById('numberInput');
    var numberError = document.getElementById('numberError');

    if (numberInput.value == "") {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "Please enter your number";
    }else if(numberInput.value > 11 ) {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "Numbers must not be greater than 11 digits";
    } else if (numberInput.value == tel) {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "Please enter a number not text";
    } else {
        numberInput.style.borderColor = 'green';
        numberError.innerHTML = "";
    }
}

function displayItems() {
    var item = document.getElementById('item').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
}

