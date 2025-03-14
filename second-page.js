// add money ------------------
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const amountNumber=document.getElementById('amount-number').value;
    const convertedAmountNumber= parseFloat(amountNumber);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount=parseFloat(mainAmount);

    if(convertedPin===8284){
        const sum = convertedMainAmount + convertedAmountNumber;

        document.getElementById('main-amount').innerText = sum ;

        alert('Your Amount has been Added.')

    }
    else{
        console.log('wrong pin ');
    }

});


// cash out ------------------------------------------
document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();


    const cashOutAmount =document.getElementById('cash-Out-amount').value;
    const convertedcashOutAmount = parseFloat(cashOutAmount);


    const pin = document.getElementById('cash-out-pin').value;
    const convertedPin = parseInt(pin);
    console.log(typeof convertedPin);

    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount=parseFloat(mainAmount);


    if(convertedPin===8284){
        const sum = convertedMainAmount - convertedcashOutAmount;

        document.getElementById('main-amount').innerText = sum ;

        alert('Your Withdraw Successfull.');

    }
    else{
        alert('wrong pin ');
    }

  });


// log out button ------------------------------
document.getElementById('logout-btn').addEventListener('click', function(){
  window.location.href = "index.html";
});




document.getElementById('add-maney-btn').addEventListener('click', function(){
document.getElementById('add-money').style.display='block';
document.getElementById('cash-out').style.display='none';
document.getElementById('transfer-money').style.display='none';
document.getElementById('get-bonus').style.display='none';
document.getElementById('pay-bill').style.display='none';
document.getElementById('transaction-history').style.display='none';
});

document.getElementById('cash-out-btn').addEventListener('click', function(){
document.getElementById('add-money').style.display='none';
document.getElementById('cash-out').style.display='block';
document.getElementById('transfer-money').style.display='none';
document.getElementById('get-bonus').style.display='none';
document.getElementById('pay-bill').style.display='none';
document.getElementById('transaction-history').style.display='none';
});

document.getElementById('transfer-btn').addEventListener('click', function(){
document.getElementById('add-money').style.display='none';
document.getElementById('cash-out').style.display='none';
document.getElementById('transfer-money').style.display='block';
document.getElementById('get-bonus').style.display='none';
document.getElementById('pay-bill').style.display='none';
document.getElementById('transaction-history').style.display='none';
});

document.getElementById('bonus-btn').addEventListener('click', function(){
document.getElementById('add-money').style.display='none';
document.getElementById('cash-out').style.display='none';
document.getElementById('transfer-money').style.display='none';
document.getElementById('get-bonus').style.display='block';
document.getElementById('pay-bill').style.display='none';
document.getElementById('transaction-history').style.display='none';
});

document.getElementById('bill-btn').addEventListener('click', function(){
document.getElementById('add-money').style.display='none';
document.getElementById('cash-out').style.display='none';
document.getElementById('transfer-money').style.display='none';
document.getElementById('get-bonus').style.display='none';
document.getElementById('pay-bill').style.display='block';
document.getElementById('transaction-history').style.display='none';
});

document.getElementById('transaction-btn').addEventListener('click', function(){
document.getElementById('add-money').style.display='none';
document.getElementById('cash-out').style.display='none';
document.getElementById('transfer-money').style.display='none';
document.getElementById('get-bonus').style.display='none';
document.getElementById('pay-bill').style.display='none';
document.getElementById('transaction-history').style.display='block';
});
