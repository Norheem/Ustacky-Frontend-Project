
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")

let cartModal = document.querySelector(".bg-modal")
let itemsInCart = document.querySelector(".cart-qty")

one.addEventListener("click", (e)=>{
    e.preventDefault();
})
two.addEventListener("click", (e)=>{
    e.preventDefault();
})
three.addEventListener("click", (e)=>{
    e.preventDefault();
})
four.addEventListener("click", (e)=>{
    e.preventDefault();
})
five.addEventListener("click", (e)=>{
    e.preventDefault();
})
six.addEventListener("click", (e)=>{
    e.preventDefault();
})

//open cart modal
function displayModal(){
    cartModal.style.display = "flex"
}
//close cart modal
function closeModal(){
    cartModal.style.display ="none"

}

//fucntion to increment items in cart
counter = 0;
function incrCartQty(){
    counter++
    itemsInCart.innerHTML = counter;
}
//fucntion to decrement items in cart
function decrCartQty(){
    counter--
    itemsInCart.innerHTML = counter
}

//items data arrays
let itemName = []
let itemPrice = []
let itemQty = []
let itemAdded = []

let items = {
    0:["SAMSUNG TV", "₦500000", 1, one],
    1:["PIXEL 4a", 250000, 1, two],
    2:["PS 5", 300000, 1, three],
    3:["MACBOOK AIR", 800000, 1, four],
    4:["APPLE WATCH", 95000, 1, five],
    5:["AIR PODS", 30000, 1, six]
}

//function to add item to the  cart
let ids = [0,0,0,0,0,0]
function addToCart(id, styl){

    if (ids[id]==0){
        incrCartQty()
        styl.style.backgroundColor = "#ffe9d6",
        styl.innerHTML = 'REMOVE FROM CART'
     
        
        itemName.push(items[id][0])
        itemPrice.push(items[id][1])
        itemQty.push(items[id][2])
        itemAdded.push(items[id][3])    
        // console.log(itemName)
      
        
        displayCart()
        ids[id]=1;
    }   
    console.log(ids)
}

//fucntion to display the items  currently in the cart
function displayCart(){
    
    let cartdiv = document.querySelector(".table")
    let currentTotal = document.getElementById("amount")
    cartData = '<tr><th>' + 'S/N' + '</th><th>' + 'Item' + '</th><th>' + 'Price' + '</th><th>' + 'Quantity' + '</th></tr>'
    total = 0
    
    for(i=0; i<itemName.length; i++){
        total += itemPrice[i] * itemQty[i]
        cartData += '<tr><td>' + '' + '</td><td>' + itemName[i] + '</td><td>' 
        + itemPrice[i] 
        + '</td><td><button onClick="decreaseItemQty(' 
        + i + ')">-</button> ' + itemQty[i] 
        + ' <button onClick="increaseItemQty(' 
        + i + ')">+</button></td> <td><button onClick="removeItem(' 
        + i + ')">Remove</button></td> </tr>'
    }
    cartdiv.innerHTML =  cartData;
    currentTotal.innerHTML = total

}

//function to remove an item from the cart
function removeItem(i){
    itemAdded[i].style.background="#ffe9d6"
    itemName.splice(i, 1)
    itemPrice.splice(i, 1)
    itemQty.splice(i, 1)
    itemAdded.splice(i,1)


    decrCartQty()
    displayCart()
}

//increment the quantity of an item in the cart
function increaseItemQty(i){
    //access ele
    currentQty = itemQty[i]
    
    currentQty++
    itemQty[i] = currentQty
    displayCart()
}

//decrement the quantity of an item in the cart
function decreaseItemQty(i){
    currentQty = itemQty[i]
    if(currentQty==1){
        alert("You cannot have less than 1 item. If you wish to remove the item click remove")
    }else{
        currentQty--
    }
    itemQty[i] = currentQty
    displayCart()
}



function nameValidation() {
    var nameInput = document.getElementById('customerName');
    var nameError = document.getElementById('nameError');

    if (nameInput.value == "") {
        nameInput.style.borderColor = 'red';
        nameError.innerHTML = "Please enter your name";
        nameError.style.color = 'red';
        nameError.style.fontFamily =  'Helvetica';
        nameError.style.fontWeight = 'bold';
    } else {
        nameInput.style.borderColor = 'green';
        nameError.innerHTML = "";
    }
}

function emailValidation() {
    var emailInput = document.getElementById('customerEmail');
    var emailError = document.getElementById('emailError');

    if(emailInput.value == "") {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "Please enter an Email";
        emailError.style.color = 'red';
        emailError.style.fontFamily = 'Helvetica';
        emailError.style.fontWeight = 'bold';
    } else if(!emailInput.value.includes("@")) {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "Invalid Email";
        emailError.style.color = 'red';
        emailError.style.fontFamily = 'Helvetica';
        emailError.style.fontWeight = 'bold';
    // } else if(!emailInput.value.includes(".com")) {
    //     emailInput.style.borderColor = 'red';
    //     emailError.innerHTML = "Invalid Email";
    //     emailError.style.color = 'red';
    //     emailError.style.fontFamily = 'Helvetica';
    //     emailError.style.fontWeight = 'bold';
    //
 } else {
        emailInput.style.borderColor = 'green';
        emailError.innerHTML = "";
    }
}

function numberValidation() {
    var phone = document.getElementById('customerTel').value;

    if (isNaN(phone) || phone.length != 11) {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "Please Enter a Valid Phone number";
        numberError.style.color = 'red';
        numberError.style.fontFamily = 'Helvetica';
        numberError.style.fontWeight = 'bold';
    }
    else {
        numberInput.style.borderColor = 'green';
        numberError.innerHTML = "";
    }
    // var numberInput = document.getElementById('numberInput');
    // var numberError = document.getElementById('numberError');

    // if (numberInput.value == "") {
    //     numberInput.style.borderColor = 'red';
    //     numberError.innerHTML = "Please enter your telephone number";
    //     numberError.style.color = 'red';
    //     numberError.style.fontFamily = 'Helvetica';
    //     numberError.style.fontWeight = 'bold';
    // } else if (numberInput.value.length < 11 && numberInput.value.length > 11){
    //     numberInput.style.borderColor = 'red';
    //     numberError.innerHTML = "Input only";
    //     numberError.style.color = 'red';
    //     numberError.style.fontFamily = 'Helvetica';
    //     numberError.style.fontWeight = 'bold';
    // } else if (isNaN(numberInput.value)){
    //     numberInput.style.borderColor = 'red';
    //     numberError.innerHTML = "Input should be numbers only";
    //     numberError.style.color = 'red';
    //     numberError.style.fontFamily = 'Helvetica';
    //     numberError.style.fontWeight = 'bold';
    // }else if(numberInput.length != 11 ) {
    //     numberInput.style.borderColor = 'red';
    //     numberError.innerHTML = "Numbers must not be greater than 11 digits";
    //     numberError.style.color = 'red';
    //     numberError.style.fontFamily = 'Helvetica';
    //     numberError.style.fontWeight = 'bold';
    // } else if (isNaN(numberInput.value)) {
    //     numberInput.style.borderColor = 'red';
    //     numberError.innerHTML = "Please enter a number not text";
    //     numberError.style.color = 'red';
    //     numberError.style.fontFamily = 'Helvetica';
    //     numberError.style.fontWeight = 'bold';
    // } else {
    //     numberInput.style.borderColor = 'green';
    //     numberError.innerHTML = "";
    // }
}



function showSummary() {
    let summarydiv = document.querySelector('.summaryTable')
    summaryData = '<tr><th>' + 'S/N' + '</th><th>' + 'Item' + '</th><th>' + 'Quantity' + '</th></tr>'
    
    for(let i = 0; i<itemName.length; i++ ) {
        summaryData += '<tr><td>' + '' + itemName[i] + '</td><td>' + itemQty[i] + '</td></tr>'
    }
    summarydiv.innerHTML = summaryData;

      //display customer Name on summary
      let customerNameDiv = document.getElementsByClassName('customerName')
      customerSummaryName = '<h3></h3>'
      for (i< 0; i<nameInput.value.length; i++) {
          customerSummaryName += '<h3>Thank You,' + nameInput.value + ', Your Order Has been Received </h3>'
          nameInput.value.style.backgroundColor = "#ffe9d6"
      }
      customerNameDiv.innerHTML = customerSummaryName;

}





function payWithPaystack() {
    let handler = PaystackPop.setup({
      key: 'pk_test_6d194f392227dd4f3a245f9e9f195b5992a4a731', // Replace with your public key
      email: document.getElementById("emailInput").value,
      amount: document.getElementById("amount").value * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        showSummary();
      }
    });
    handler.openIframe();
  }
  
