
 const Addmoney1 = document.getElementById('addmoney1')
 Addmoney1.addEventListener("click", addMoney)
 function addMoney() {
    
    var inputAmount = document.getElementById('amount').value;

    
    if (isNaN(inputAmount) || inputAmount === "") {
        alert("Please enter a valid amount.");
        return;
    }

    
    var addedAmount = parseFloat(inputAmount);

   
    var currentBalance = getBalance();
    var newBalance = currentBalance + addedAmount;

    
    localStorage.setItem('balance', newBalance);

    
    window.location.href = "success.html";
}


function getBalance() {
    
    return parseFloat(localStorage.getItem('balance')) || 0;
}