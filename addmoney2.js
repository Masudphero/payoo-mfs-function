document.getElementById('btn-add-money')
.addEventListener('click', function(event){
event.preventDefault();
const addMoney=getInputFieldValueById('input-add-money');
const pinNumber=getInputFieldValueById('input-pin-number');

if(isNaN(addMoney)){
   alert('Failed to add money') 
   return
}

if(pinNumber===1234){
const balence=getTextFiledValuById('account-balance');
const newBalance=balence+addMoney;
document.getElementById('account-balance').innerText=newBalance;

// transection history add
const p=document.createElement('p');
p.innerText=`Added:${addMoney} Tk. Balance:${newBalance}`;

// transection add
document.getElementById('transaction-conteiner').appendChild(p);

}
else{
    alert('Faild the money')
}
})