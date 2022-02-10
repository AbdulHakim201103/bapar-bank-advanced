function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const amountText = input.value;
    const amount = parseFloat(amountText);
    input.value ='';
    return amount;
}
function gatUpdateTotal(updateTotalId,amount) {
    const total = document.getElementById(updateTotalId);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + amount;   
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function getUpdateBalance(inputAmaunt,isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + inputAmaunt;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - inputAmaunt;
    } 
}

// Updata Deposit and Balance

document.getElementById('deposit-button').addEventListener('click',function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        gatUpdateTotal('deposit-total',depositAmount);
        getUpdateBalance(depositAmount,true);   
    }   
})

// Updata Withdrow and Balance

document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        gatUpdateTotal('withdraw-total',withdrawAmount);
        getUpdateBalance(withdrawAmount,false);
    }
    // if (withdrawAmount < currentBalance) {
    //     console.log('comment you error masage')   
    // }
})



