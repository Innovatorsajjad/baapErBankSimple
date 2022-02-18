//Handle Deposite Button ....................
document.getElementById("deposite-button").addEventListener("click",function(){
    const DepositeAmmountInput = document.getElementById("deposite-amount");
    const DepositeAmmountText = DepositeAmmountInput.value;
    const DepositeAmmount = parseFloat(DepositeAmmountText);
    

    //Cgange Deposite input  ammount........
    const DepositeTotalAmmount = document.getElementById("deposit-total");
    const DepositeTotalAmmountText = DepositeTotalAmmount.innerText;
    const DepositeTotal = parseFloat(DepositeTotalAmmountText);
    
    DepositeTotalAmmount.innerText = DepositeAmmount+DepositeTotal;
})

//Handle Widthrow Button..........................................
document.getElementById("widthrow-button").addEventListener("click",function(){
    const WidthrowAmmountInput = document.getElementById("Widthrow-amount");
    const WidthrowAmmountInputText = WidthrowAmmountInput.value;
    const WidthrowAmmount= parseFloat(WidthrowAmmountInputText)


     //Change Deposite Input Ammount.................
    const WidthrowTotalInput = document.getElementById("widthrow-total");
    const WidthrowTotalText= WidthrowTotalInput.innerText;
    const WidthrowTotal = parseFloat(WidthrowTotalText);

    WidthrowTotalInput.innerText = WidthrowAmmount+WidthrowTotal;
})