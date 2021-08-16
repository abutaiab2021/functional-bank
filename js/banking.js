/* function doubleIt(num){
    const result = num * 2;
    return result;
}

const first = doubleIt(5);
const second = doubleIt(6); */

function getInputVlue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFiledId,Amount){
    // debugger;
    const totalElement = document.getElementById(totalFiledId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);//convert floating number for string 
    totalElement.innerText = previousTotal + Amount;
};

function getCurrentBalance(){
    const currentBalanceTotal =  document.getElementById('balance-total');
    const balanTotalText = currentBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanTotalText);
    return previousBalanceTotal;
}
function updateBalance(Amount,isAdd){
     const currentBalanceTotal =  document.getElementById('balance-total');
    /*const balanTotalText = currentBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanTotalText); *///convert floating number for string 
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true){
        currentBalanceTotal.innerText = previousBalanceTotal + Amount;
    }else{
        currentBalanceTotal.innerText = previousBalanceTotal - Amount;
    }
}

//1. for deposit and balance calculation
document.getElementById('deposit-button').addEventListener('click',function(){
    //without function system no-1
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const currentDepositTotal = parseFloat(depositAmountText); 
    */
    //convert floating number for string 
    // console.log(depositAmount);


    

    /* //get and update  deposit total
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);//convert floating number for string 
    
    depositTotal.innerText = previousDepositTotal + currentDepositTotal; */
    
    
    //update balance
    /* const currentBalanceTotal =  document.getElementById('balance-total');
    const balanTotalText = currentBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanTotalText);//convert floating number for string 
    currentBalanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputVlue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);
    }  
});

//2. for widthdraw and balance calculation

document.getElementById('withdraw-button').addEventListener('click',function(){
    //without function system no-1
    /* 
    const withdrawInput= document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const currentWithdrawTotal  = parseFloat(withdrawAmountText); 
    */
   //convert floating number for string
    // console.log(previousWithdrawTotal);

    

    
    //get and update withdraw  total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);//convert floating number for string
    
    withdrawTotal.innerText = previousWithdrawTotal + currentWithdrawTotal;
    */
   

    //decrese balance total
    /* const currentBalanceTotal =  document.getElementById('balance-total');
    const balanTotalText = currentBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanTotalText);//convert floating number for string 
    // console.log(previousBalanceTotal);
    currentBalanceTotal.innerText = previousBalanceTotal - withdrawAmount;  */
    const withdrawAmount = getInputVlue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    if(withdrawAmount > currentBalance){
        console.log('you can not withdraw this money because your withdraw amount is bigger then current balance.')
    }
});
