
const Addmoney = document.getElementById("addmoney")
Addmoney.addEventListener("click", redirectToAddMoney )
function redirectToAddMoney() {
    window.location.href = "add-money.html";
}


function updateBalance(newBalance) {
    document.getElementById('balance').textContent = 'Balance: ' + newBalance.toFixed(2) + " Rs";
}


function getBalance() {
    
    return parseFloat(localStorage.getItem('balance')) || 0;
}


updateBalance(getBalance());