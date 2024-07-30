//step 1
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositfield = document.getElementById('user-deposit');
    const newdepositamountstring = depositfield.value;
    const newdepositamount = parseFloat(newdepositamountstring);
    //step 2 for previous deposit and current deposit
    const deposittotalelements = document.getElementById('deposit-total');

    const previousdeposittotalstring = deposittotalelements.innerText;
    const previousdeposittotal = parseFloat(previousdeposittotalstring);
    const currentdepoasittotal = newdepositamount + previousdeposittotal;
    deposittotalelements.innerText = currentdepoasittotal;

    //step 3 for the total current balance
    const balancetotalelemnts = document.getElementById('Balance-total');
    const balacetotalamount = balancetotalelemnts.innerText;
    const balanceintotal = parseFloat(balacetotalamount);
    const currentbalancetotal = balanceintotal + newdepositamount;
    balancetotalelemnts.innerText = currentbalancetotal;



    //step 7 emty string 

    depositfield.value = '';


})