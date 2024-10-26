import { addList, deleteList, doneList, editList } from "./lists.js";

export const listGroupHandler = (event) => {

    if (event.target.classList.contains('taskEditBtn')) {
      editList(event.target.closest('.list').id);
  
    } else if (event.target.classList.contains('taskDeleteBtn')) {
      deleteList(event.target.closest('.list').id);
  
    } else if (event.target.classList.contains('markTask')) {
      doneList(event.target.closest('.list').id);
    }
  
  };
  
  export const taskInputHandler = (event) => {
    if (event.key === 'Enter') {
      addList(taskInput.value);
    }
  }
  
  export const deleteAllHandler = () => {
    if (confirm('Are you sure to remove all lists')) {
      const lists = listsGroup.querySelectorAll('.list');
      lists.forEach((list) => list.remove());
    }
  };
  
  export const doneAllHandler = () => {
    if (confirm('Are you sure to done all lists')) {
      const markTaskAll = listsGroup.querySelectorAll('.list');
      markTaskAll.forEach((mark) => {
        mark.querySelector('.markTask').checked = true
        doneList(mark.id)
      });
    }
  };