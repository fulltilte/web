const input = document.querySelector('.list-add-addTask');
const btn = document.querySelector('.list-add-btn');
const list_view = document.querySelector('.list-view');
const prioritise = document.querySelector('.list-add-prioritise');
const list_complited = document.querySelector('.list-complited');
const list_table = document.querySelector('.list-table');
const	list_add_start = document.querySelector('.list-add-start-select');
const list_add_end = document.querySelector('.list-add-end-select');

let Tasks = [];
let toDoTasks = [];

const days = {
	Mon: 1,
	Tue: 2,
	Wen: 3,
	Thu: 4,
	Fri: 5,
	Sat: 6,
	Sun: 7
};

let count_check = 0;

function Task(value, pr, start, end){
	this.value = value;
	this.pr = +pr;
	this.start = start;
	this.end = end;
	this.completed = false;
}

btn.addEventListener('click', ()=> {
	let temp = new Task(input.value, prioritise.value, list_add_start.value, list_add_end.value);
	Tasks.push(temp);
	localStorage.storage = JSON.stringify(Tasks);
	//var user = JSON.parse( localStorage.storage );
	sortTask();
	printAll();
});

function printAll(){
	list_view.innerHTML = ``;
	list_complited.innerHTML = ``;
	list_table.innerHTML = ``;
	if(Tasks.length > 0) {
	list_view.innerHTML = `<h2 class="list-title">MY TASKS</h2>`;
	for (let i = 0; i < Tasks.length; i++){
		if (!Tasks[i].completed)
			list_view.innerHTML += showItemTask(Tasks[i], i);
	} 

	toDoTasks = document.querySelectorAll('.list-view-item-span');
	list_view.innerHTML += `<h2 class="list-title">${count_check} ${(Tasks.length - count_check)}</h2>`;
	list_complited.innerHTML = `<h2 class="list-title">COMPLETED</h2>`;
	for (let i = 0; i < Tasks.length; i++){
		if (Tasks[i].completed){

			list_complited.innerHTML += showItemTask(Tasks[i], i);
		}
	}

	list_table.style.display = 'block';

	list_table.innerHTML = `<h2 class="list-title">GRAPH</h2>`;
	list_table.innerHTML += showDays();

	for (let i = 0; i < Tasks.length; i++)
	{
		let s = days[Tasks[i].start];
		let t = +days[Tasks[i].end];
		let e = t + 1;
		if(!Tasks[i].completed)
			list_table.innerHTML += showTable(Tasks[i], i, s, e);
	}
	}
}

function showDays() {
	return `<div class="list-table-chart">
      <div class="list-table-chart-row list-table-chart-period">
         <span></span></span><span>Mon</span><span>Tue</span><span>Wen</span>
         <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
      <div class="list-table-chart-row list-table-chart-lines"> 
         <span></span><span></span><span></span>
         <span></span><span></span><span></span>
         <span></span>
      </div>
  	</div>`;
}

function showTable(temp, index, start, end){
	return `<div class="list-table-chart-row">
		<div class="list-table-chart-row-item">${index + 1}</div>
			<ul class="list-table-chart-row-bars">
				<li style="grid-column: ${start}/${end}; background-color: #588BAE;" class="list-table-chart-li-${index}">${temp.value}</li>
			</ul>
	</div>`;
}

function showItemTask(temp, index) {
	return `<div class="list-view-item ${temp.completed ? 'checked': ''}" draggable="true" ondragstart=setDraggetIndex(${index})>
		<input onclick="checkBoxSelected(${index})" class="list-view-item-check" type="checkbox" ${temp.completed ? 'checked': ''}>
		<span class="list-view-item-span">${temp.value}    ->    ${temp.pr}        ${temp.start}/${temp.end}</span>
		<div class="list-view-item-input">
			<button onclick="buttonDelete(${index})" class="btn-deleted"></button>
		</div>
	</div>`;
}

let draggedIndex = 0;

const setDraggetIndex = (index) => {
	draggedIndex = index;
}

function checkBoxSelected(index){
	Tasks[index].completed = !Tasks[index].completed;

	if (Tasks[index].completed)
	{
		count_check++;
	}

	else
	{
		count_check--;
	}

	printAll();
}

function buttonDelete(index){
	if (count_check > 0)
		count_check--;

	Tasks.splice(index, 1);
	deleteLocal(index);
	printAll();
	console.log(Tasks);
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

list_view.addEventListener('dragstart', (evt)=> {
	
});

list_view.addEventListener('dragend', (evt)=> {
	
});

list_complited.addEventListener('dragover', (evt)=> {
	evt.preventDefault();
});

list_complited.addEventListener('drop', (evt)=> {
	evt.preventDefault();
	checkBoxSelected(draggedIndex);
});

list_view.addEventListener('dragover', (evt)=> {
	evt.preventDefault();
});

list_view.addEventListener('drop', (evt)=> {
	evt.preventDefault();
	checkBoxSelected(draggedIndex);
});

function deleteLocal(index) {
	let temp = JSON.parse(localStorage.storage);
	temp.splice(index, 1);
	localStorage.storage = JSON.stringify(temp);
	if (temp.length == 0)
		delete localStorage.storage;
	printAll();
}

function loadLocal() {
	if(localStorage.storage != null){
		Tasks = JSON.parse( localStorage.storage );
		printAll();
	}
}

loadLocal();