"use strict";
const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const createTask = (text) => {
	let li = document.createElement('li');
	li.textContent = text;
	list.append(li);
};

for (const task of tasks) {
	createTask(task);
};

btn.addEventListener('click', () => {
	if (input.value === '') return;
	tasks.push(input.value);
	localStorage.setItem('tasks', JSON.stringify(tasks));
	createTask(input.value);
	input.value = '';
});

list.addEventListener('click', (event) => {
	if (event.target.tagName !== 'LI') return;
	tasks = tasks.filter( (t) => {
		return t !== event.target.textContent;
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
	event.target.remove();
});
