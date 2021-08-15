document.getElementById('depositSubmit').addEventListener('click', function() {

    // previous deposit amount
    const previousDeposittext = document.getElementById('depositAmount').innerText;
    const previousDepositAmount = parseFloat(previousDeposittext);


    // new deposit amount 
    const newDepositInputvalue = document.getElementById('inputDeposit')
    const newDepositInputtext = newDepositInputvalue.value;
    const newDepositInput = parseFloat(newDepositInputtext);


    // total Amount add

    const previousTotalTextInner = document.getElementById('totalAmount').innerText;
    const previousTotalAmount = parseFloat(previousTotalTextInner);


    if (newDepositInputtext != "") {
        if (newDepositInputtext > 0) {
            const totalDeposit = previousDepositAmount + newDepositInput;
            const totalAmountBalance = newDepositInput + previousTotalAmount;

            document.getElementById('depositAmount').innerText = totalDeposit;
            document.getElementById('totalAmount').innerText = totalAmountBalance;
            document.getElementById("login-error").style.color = "green";
            document.getElementById('login-error').innerHTML = "Amount Deposited !";
        } else {
            document.getElementById("login-error").style.color = "red";
            document.getElementById('login-error').innerHTML = "Deposit Field Cann't Zero Or Negative";
        }
    } else {
        document.getElementById("login-error").style.color = "red";
        document.getElementById('login-error').innerHTML = "Deposit Field Cann't Empthy";
    }



    newDepositInputvalue.value = '';





})




// withdraw section 
document.getElementById('withdrawSubmit').addEventListener('click', function() {

    // previous withdraw amount
    const previouswithdrawtext = document.getElementById('withdrawAmount').innerText;
    const previouswithdrawAmount = parseFloat(previouswithdrawtext);

    // new Withdraw amount 
    const newWithdrawInputvalue = document.getElementById('inputWithdraw');
    const newWithdrawInputtext = newWithdrawInputvalue.value;
    const newWithdrawInput = parseFloat(newWithdrawInputtext);

    const previousTotalTextInner = document.getElementById('totalAmount').innerText;
    const previousTotalAmount = parseFloat(previousTotalTextInner);



    if (newWithdrawInputtext != "") {
        if (newWithdrawInputtext > 0) {
            if (previousTotalAmount < newWithdrawInput) {
                document.getElementById("login-error-withdraw").style.color = "red";
                document.getElementById('login-error-withdraw').innerHTML = "Balance Is Running Low" + '<br>' + " " + "Maximum Useable Balance Is - $" + previousTotalTextInner;
            } else {
                const totalWithdraw = previouswithdrawAmount + newWithdrawInput;
                const totalAmountBalance = previousTotalAmount - newWithdrawInput;

                document.getElementById('withdrawAmount').innerText = totalWithdraw;
                document.getElementById('totalAmount').innerText = totalAmountBalance;
                document.getElementById("login-error-withdraw").style.color = "green";
                document.getElementById('login-error-withdraw').innerHTML = 'Withdraw Success !';

            }

        } else {

            document.getElementById("login-error-withdraw").style.color = "red";
            document.getElementById('login-error-withdraw').innerHTML = "Withdraw  Cann't Zero Or Negative";
        }
    } else {
        document.getElementById("login-error-withdraw").style.color = "red";
        document.getElementById('login-error-withdraw').innerHTML = "Withdraw  Cann't Empthy";
    }
    newWithdrawInputvalue.value = "";


})