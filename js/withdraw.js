//step 1 to connet to the btn add evenlistenenr for click the button
// step 2 for get the withdraw amonut for the withdraw field
// also make sure that to convert the string value in to number by using parsefloat
// 3 get the previous withdraw total
// 4 calculate the total withdraw amonunt
// 5 set totol withdraw amount
// 6 get the previous balance total

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawbalances = document.getElementById('user-withdraw')
    const withdrawbalancestring = withdrawbalances.value;
    const withdrawbalanceall = parseFloat(withdrawbalancestring);

    //step 3
    const withdrawtotalelements = document.getElementById('withdraw-balance');
    const withdrawtotalelementsstring = withdrawtotalelements.innerText;
    const previouswithdawtotal = parseFloat(withdrawtotalelementsstring);




    //step 4
    const newwithdrawtotal = withdrawbalanceall + previouswithdawtotal;
    withdrawtotalelements.innerText = newwithdrawtotal;


    //step 5
    const balancetotalelements = document.getElementById('Balance-total');
    const balancetotalelementstring = balancetotalelements.innerText;
    const newbalancetotal = parseFloat(balancetotalelementstring);



    //step 6
    const newbalancetotalamount = newbalancetotal - newwithdrawtotal;
    balancetotalelements.innerText = newbalancetotalamount;
    // step 7 
    withdrawbalances.value = '';










})