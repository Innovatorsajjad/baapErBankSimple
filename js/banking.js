    //Hanle diposite Button event./
    document.getElementById("deposite-button").addEventListener('click',function(){
        //get the amount deposited............
    const inputListener = document.getElementById("deposite-amount");
    const depositeAmountText= inputListener.value;
    const depositeAmount = parseFloat(depositeAmountText);


    const depositTotal=document.getElementById('deposit-total');
    const correntDepositeAmountText = depositTotal.innerText;
    const correntDepositeAmount = parseFloat(correntDepositeAmountText)

    const newDepostTotal=correntDepositeAmount +depositeAmount;
     depositTotal.innerText = newDepostTotal;

     //update Account Balance...............
    const BalanceTotal = document.getElementById('Balance-total');
    const BalanceTotalText = BalanceTotal.innerText;
    const previousBalanceTotal=parseInt(BalanceTotalText);
    const newBalanceTotal= previousBalanceTotal+newDepostTotal;
    BalanceTotal.innerText=newBalanceTotal;

     //clear the deposite input field;
     depositeAmount.value = '';
    });

    
