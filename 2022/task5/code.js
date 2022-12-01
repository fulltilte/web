const block = document.querySelector('#block');
const second_name = document.querySelector('#second_name');
const first_name = document.querySelector('#first_name');
const email = document.querySelector('#email');
const telephone = document.querySelector('#telephone');
const address = document.querySelector('#address');
const country = document.querySelector('#country');
const job = document.querySelector('#job');
const btn = document.querySelector('.form_btn')

function show() {
    var sex = document.getElementsByName('sex');
    block.innerHTML = '<h1>Resault Form</h1>';

    if (second_name.value.length >= 3) {
        block.innerHTML += `<p>Your second name: ${second_name.value}</p>`;
        block.innerHTML += `<p>Your first name: ${first_name.value}</p>`;
        block.innerHTML += `<p>Your email: ${email.value}</p>`;
        block.innerHTML += `<p>Your telephone: ${telephone.value}</p>`;
        block.innerHTML += `<p>Your address: ${address.value}</p>`;
        block.innerHTML += `<p>Your country: ${country.value}</p>`;
        block.innerHTML += `<p>Your job: ${job.value}</p>`;

        for (var el of sex) {
            if (el.checked) {
                block.innerHTML += `<p>Your gender: ${el.value}</p>`; 
            }
        }
    }

    else {
        block.innerHTML += `<p>Некорректный ввод информации</p>`;
    }
}

let flag = true;

btn.addEventListener('click', check = ()=> {
    if ((second_name.value == '') || (first_name.value == '') || (email.value == '')
        || (telephone.value == '') || (address.value == '') || (document.getElementById("country").selectedIndex == 0) || (document.getElementById("job").selectedIndex == 0)) {
        if (second_name.value == '') {
            second_name.classList.add('invalid');
            second_name.classList.remove('valid');
        }

        if (first_name.value == '') {
            first_name.classList.add('invalid');
        }

        if (email.value == '') {
            email.classList.add('invalid');
        }

        if (telephone.value == '') {
            telephone.classList.add('invalid');
        }

        if (address.value == '') {
            address.classList.add('invalid');
        }

        if (document.getElementById("country").selectedIndex == 0) {
            country.classList.add('invalid');
        }

        if (document.getElementById("job").selectedIndex == 0) {
            job.classList.add('invalid');
        }
    }

    else {
        show();
        flag = false;
    }
});

second_name.addEventListener('input', ()=> {
    const pattern = '^[a-zA-Z]{4,}$';
    let reg = new RegExp(pattern);
    let str = second_name.value;    

    if (reg.test(str)){
        second_name.classList.add('valid');
        second_name.classList.remove('invalid');
    }

    else {
        second_name.classList.add('invalid');
        second_name.classList.remove('valid');
    }
});

first_name.addEventListener('input', ()=> {
    const pattern = '^[a-zA-Z]{2,}$';
    let reg = new RegExp(pattern);
    let str = first_name.value;

    if (reg.test(str)){
        first_name.classList.add('valid');
        first_name.classList.remove('invalid');
    }

    else {
        first_name.classList.add('invalid');
        first_name.classList.remove('valid');
    }
});

email.addEventListener('input', ()=> {
    const pattern = '^[a-zA-Z0-9.-_]+@[a-zA-Z]+[.][a-zA-Z]{2,4}$';
    let reg = new RegExp(pattern);
    let str = email.value;

    if (reg.test(str)){
        email.classList.add('valid');
        email.classList.remove('invalid');
    }

    else {
        email.classList.add('invalid');
        email.classList.remove('valid');
    }
});

telephone.addEventListener('input', ()=> {
    const pattern = /^[\d]{1}\([\d]{2,3}\)[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
    let reg = new RegExp(pattern);
    let str = telephone.value;

    if (reg.test(str)){
        telephone.classList.add('valid');
        telephone.classList.remove('invalid');
    }

    else {
        telephone.classList.add('invalid');
        telephone.classList.remove('valid');
    }
});

let counter = 0;
const showTimer = () => {
    console.log(counter);
    counter++;
    
    if (flag) {
        setTimeout('showTimer()', 1000);
    }

    else {
        clearInterval('showTimer()')
    }

    if ((counter == 60) && ((second_name.value == null) || (first_name.value == null) || (email.value == null)
    || (telephone.value == null) || (address.value == null) || (document.getElementById("country").selectedIndex == 0) || (document.getElementById("job").selectedIndex == 0))){
        window.alert("Вы не успели ввести данные в течении 60 секунд");
        counter = 0;

        second_name.classList.remove('valid');
        second_name.classList.remove('invalid');
        first_name.classList.remove('valid');
        first_name.classList.remove('invalid');
        email.classList.remove('valid');
        email.classList.remove('invalid');
        telephone.classList.remove('valid');
        telephone.classList.remove('invalid');
        address.classList.remove('valid');
        address.classList.remove('invalid');
        country.classList.remove('valid');
        country.classList.remove('invalid');
        job.classList.remove('valid');
        job.classList.remove('invalid');

        second_name.value = null;
        first_name.value = null;
        email.value = null;
        telephone.value = null;
        address.value = null;
        document.getElementById("country").selectedIndex = 0;
        document.getElementById("job").selectedIndex = 0;
    
        const obj = document.getElementsByName('sex');

        for (let i = 0; i < obj.length; i++) {
            obj[i].checked = false;
        }
    }
}

window.addEventListener('load', showTimer());