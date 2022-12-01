const input = document.querySelector('#addTask');
const btn = document.querySelector('.btn');
const list_view = document.querySelector('.list_view');
const prioritise = document.querySelector('#prioritise');

let Tasks = [];
let toDoTasks = [];

let count_check = 0;

function Task(value, pr){
	this.value = value;
	this.pr = +pr;
	this.completed = false;
}

btn.addEventListener('click', ()=> {
	console.log('Hello');
	let temp = new Task(input.value, prioritise.value);
	Tasks.push(temp);
	sortTask();
	printAll();
	
});

function printAll(){
	list_view.innerHTML = ``;

	for (let i = 0; i < Tasks.length; i++){
		list_view.innerHTML += showItemTask(Tasks[i], i);
	} 

	toDoTasks = document.querySelectorAll('.list_view_item');
	// let btnDelete = document.querySelector('.btn_deleted');
	list_view.innerHTML += `${count_check} ${(Tasks.length - count_check)}`;
}

function showItemTask(temp, index) {
	return `<div class="list_view_item">
		<span>${index + 1}. ${temp.value} -> ${temp.pr}</span>
		<div class="list_view_item_input">
			<input onclick="checkBoxSelected(${index})" type="checkbox" ${temp.completed ? 'checked': ''}>
			<button onclick="buttonDelete(${index})" class="btn_deleted">Delete</button>
		</div>
	</div>`;
}

function checkBoxSelected(index){
	Tasks[index].completed = !Tasks[index].completed;

	if (Tasks[index].completed)
	{
		toDoTasks[index].classList.add('checked');
		count_check++;
	}

	else
	{
		toDoTasks[index].classList.remove('checked');
		count_check--;
	}

	printAll();
}

function buttonDelete(index){
	if (count_check > 0)
		count_check--;

	Tasks.splice(index, 1);
	printAll();
}

function sortTask(){
	for (let i = 0; i < Tasks.length; i++)
	{
		for (let j = 0; j < Tasks.length - i - 1; j++)
		{
			if (Tasks[j].pr > Tasks[j + 1].pr)
			{
				let t = Tasks[j];
				Tasks[j] = Tasks[j + 1];
				Tasks[j + 1] = t;
			}
		}
	}
}