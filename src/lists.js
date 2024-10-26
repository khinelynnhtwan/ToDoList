import Swal from "sweetalert2";
import { listsGroup, taskInput } from "./selectors.js";
import { v4 as uuidv4 } from 'uuid';

let count = 1;

export const tasks = ["To read Js Book", "To Learn English", "To go school"];

export const addList = () => {
  if (isNaN(taskInput.value)) {
    listsGroup.append(createNewList(taskInput.value));
    taskInput.value = "";
    totalList();
  } else {      
    taskInput.placeholder = 'Add a task';
  }

};


export const totalList = () => {
    // count//
    const totalLists = document.querySelectorAll('.list');
    taskTotal.innerText = totalLists.length;
    taskInput.placeholder = '';
  }
  
  
 export const updateTotalLists = () => {
    const markLists = document.querySelectorAll('.list input:checked');
    doneTotal.innerText = "Done - " + markLists.length;
  }
  

 export const createNewList = (currentText) => {
    const list = listTemplate.content.cloneNode(true);
    console.log(list);
    list.querySelector('.list').id = 'list' + uuidv4();
    list.querySelector('.listTask').innerText = currentText;
    return list;
  }
  
  
export  const deleteList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    // console.log(currentList);
    // if (window.confirm('Are you sure to delete?')) {
    //   currentList.remove();
    //   totalList(); // Update total list count
    //   updateTotalLists();
    // }
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        currentList.remove();
      totalList(); // Update total list count
      updateTotalLists();
      }
    });
  };
  
  
 export const editList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const taskEditBtn = currentList.querySelector('.taskEditBtn');
    const taskDeleteBtn = currentList.querySelector('.taskDeleteBtn');
    const listTask = currentList.querySelector('.listTask');
  
    taskEditBtn.setAttribute('disabled', true);
    taskDeleteBtn.setAttribute('disabled', true);
    const currentTask = listTask.innerText;
    const newTaskInput = document.createElement('input');
    newTaskInput.className = 'border border-stone-950 px-2 focus-visible:outline-none';
    newTaskInput.value = currentTask;
    listTask.after(newTaskInput);
    newTaskInput.focus();
    listTask.classList.add('hidden');
  
    // blur//
    newTaskInput.addEventListener('blur', () => {
      taskEditBtn.removeAttribute('disabled');
      taskDeleteBtn.removeAttribute('disabled');
      listTask.innerText = newTaskInput.value;
      listTask.classList.remove('hidden');
      newTaskInput.remove();
    });
  
    //Enter//
    newTaskInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        taskEditBtn.removeAttribute('disabled');
        taskDeleteBtn.removeAttribute('disabled');
        listTask.innerText = newTaskInput.value;
        listTask.classList.remove('hidden');
        newTaskInput.remove();
      }
    });
  
  };
  
  
 export const doneList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const listTask = document.querySelector('.listTask');
    const taskEditBtn = document.querySelector('.taskEditBtn');
    const taskDeleteBtn = document.querySelector('.taskDeleteBtn');
  
    updateTotalLists(currentList);
    listTask.classList.toggle('line-through');
    currentList.classList.toggle('bg-red-100');
    currentList.classList.toggle('scale-95');
    currentList.classList.toggle('duration-100');
    taskEditBtn.toggleAttribute('disabled');
    taskDeleteBtn.toggleAttribute('disabled');
  
  };
  