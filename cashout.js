document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut=getInputFieldValueById('input-cah-out');
    const pinNumber=getInputFieldValueById('input-cash-out-pin');
    // console.log('inside click handler',cashOut,pinNumber);
    if(isNaN(cashOut)){
      alert('Failed to cash Out')
    }
    if(pinNumber===1234){
      const balence=getTextFiledValuById('account-balance');
      if(cashOut>balence){
        alert('You do not have enough money to cash out')
        return
      }
      const newBalance=balence-cashOut;
      document.getElementById('account-balance').innerText=newBalance
      
      //transaction history 
      const div=document.getElementById('div');
      div.classList.add('bg-yellow-300');
      div.innerHTML=`
      <h4 class="text-2xl font-bold">Cash Out</h4>
      <p>${cashOut} withdraw. New Balance ${newBalance} </p>
      `
      document.getElementById('transaction-conteiner').appendChild(div);
    }
    else{
        alert('No money for tou----dgm')
    }
})
    
