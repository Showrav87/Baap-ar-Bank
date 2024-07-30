//step 1
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    //step 2
    const passfield = document.getElementById('user-pass');
    const password = passfield.value;
    //step 3 this the not proper way to cheak the email
    if (email === 'showrav@gmail.com' && password === "12345") {
        window.location.href = 'bank.html';

    }
    else {
        alert('Not valid user');
    }
})