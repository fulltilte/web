const block = document.querySelector('.block');
const card = document.querySelector('.view_card');
const card_logo = document.querySelector('.view_card_logo');
const card_number = document.querySelector('.view_card_number');
const card_info = document.querySelector('.view_card_info');
const card_number1 = document.querySelector('#card_number1');
const card_number2 = document.querySelector('#card_number2');
const card_number3 = document.querySelector('#card_number3');
const card_number4 = document.querySelector('#card_number4');
const name = document.querySelector('#name');
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.querySelector('#cvc');
const btn = document.querySelector('.btn');


function show() {
   block.innerHTML = '<h1>Card info</h1>';

   block.innerHTML += `<p>Your card number: ${card_number1.value} ${card_number2.value} ${card_number3.value} ${card_number4.value} </p>`;
 	block.innerHTML += `<p>Your name: ${name.value}</p>`;
 	block.innerHTML += `<p>Month and year: ${month.value} ${year.value}</p>`;
 	block.innerHTML += `<p>Your cvc: ${cvc.value}</p>`;

   block.classList.add('upgrade');

 	card.classList.add('__view');

   let logo1 = document.createElement("img");
   logo1.src = "images/sim-card.png";
   card_logo.append(logo1);

   let logo2 = document.createElement("img");
   logo2.src = "images/visa.png";
   card_logo.append(logo2);

   card.appendChild(card_logo);

   card_number.innerHTML = `<p>${card_number1.value} ${card_number2.value} ${card_number4.value} ${card_number4.value}</p>`;
   card.appendChild(card_number);

   let card_info_item = document.createElement("div");
   card_info_item.classList.add('view_card_info_item');
   card_info.append(card_info_item);

   //let card_info_item_maintext = document.createElement("p");
   card_info_item.innerHTML = `<p class="card_info_item_maintext">Card Holder</p>`;
   card_info_item.innerHTML += `<p class="card_info_item_infotext">${name.value}</p>`;

   let card_info_item1 = document.createElement("div");
   card_info_item1.classList.add('view_card_info_item');
   card_info.append(card_info_item1);

   //let card_info_item_maintext1 = document.createElement("p");
   card_info_item1.innerHTML = `<p class="card_info_item_maintext">Expires</p>`;
   card_info_item1.innerHTML += `<p class="card_info_item_infotext">${month.value}/${year.value.slice(2,4)}</p>`;

   card.appendChild(card_info);
}

btn.addEventListener('click', check = ()=> {
	var date = new Date();

	let m = date.getMonth();
	let year_now = date.getFullYear();

	let month_now = m + 1;

	if ((card_number1.value == '') || (card_number2.value == '') || (card_number3.value == '')
        || (card_number4.value == '') || (name.value == '') || (month.value == '') || (year.value == '') || (cvc.value == '')) {
		window.alert("Вы оставили пустые поля");
	}

	else if (card_number1.classList.contains('invalid') || card_number2.classList.contains('invalid') || card_number3.classList.contains('invalid')
		|| card_number4.classList.contains('invalid') || name.classList.contains('invalid') || cvc.classList.contains('invalid')){
		window.alert("Не правильно заполнены поля");
	}

	else if (year.value <= year_now && month.value <= month_now) {
		window.alert('Действие карты закончилось')
	}

	else {
   	show();		
	}
});

card_number1.addEventListener ('input', ()=> {
   const pattern = '^[0-9]{4}$';
   let reg = new RegExp(pattern);
   let str = card_number1.value;

   if (reg.test(str)){
      card_number1.classList.add('valid');
      card_number1.classList.remove('invalid');
   }

   else {
      card_number1.classList.add('invalid');
      card_number1.classList.remove('valid');
   }
});

card_number2.addEventListener ('input', ()=> {
   const pattern = '^[0-9]{4}$';
   let reg = new RegExp(pattern);
   let str = card_number2.value;

   if (reg.test(str)){
      card_number2.classList.add('valid');
      card_number2.classList.remove('invalid');
   }

   else {
      card_number2.classList.add('invalid');
      card_number2.classList.remove('valid');
   }
});

card_number3.addEventListener ('input', ()=> {
   const pattern = '^[0-9]{4}$';
   let reg = new RegExp(pattern);
   let str = card_number3.value;

   if (reg.test(str)){
      card_number3.classList.add('valid');
      card_number3.classList.remove('invalid');
   }

   else {
      card_number3.classList.add('invalid');
      card_number3.classList.remove('valid');
   }
});

card_number4.addEventListener ('input', ()=> {
   const pattern = '^[0-9]{4}$';
   let reg = new RegExp(pattern);
   let str = card_number4.value;

   if (reg.test(str)){
      card_number4.classList.add('valid');
      card_number4.classList.remove('invalid');
   }

   else {
      card_number4.classList.add('invalid');
      card_number4.classList.remove('valid');
   }
});

name.addEventListener ('input', ()=> {
   const pattern = /^[A-Z]+[\s]+[A-Z]{2,}$/;
   let reg = new RegExp(pattern);
   let str = name.value;

   if (reg.test(str)){
      name.classList.add('valid');
      name.classList.remove('invalid');
   }

   else {
      name.classList.add('invalid');
      name.classList.remove('valid');
   }
});

cvc.addEventListener ('input', ()=> {
   const pattern = '^[0-9]{3}$';
   let reg = new RegExp(pattern);
   let str = cvc.value;

   if (reg.test(str)){
      cvc.classList.add('valid');
      cvc.classList.remove('invalid');
   }

   else {
      cvc.classList.add('invalid');
      cvc.classList.remove('valid');
   }
});