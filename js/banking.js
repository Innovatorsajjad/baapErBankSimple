    //Hanle diposite Button event./
    document.getElementById("deposite-button").addEventListener('click',function(){
        //get the amount deposited............
    const inputListener = document.getElementById("deposite-amount");
    const depositeAmount = inputListener.value;
    console.log(depositeAmount);

    const depositTotal=document.getElementById('deposit-total');
     depositTotal.innerText = depositeAmount;
    })
