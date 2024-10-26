import { deleteAllHandler, doneAllHandler, listGroupHandler, taskInputHandler } from "./handlers.js";
import { addList } from "./lists.js";
import { addTaskBtn, deleteAll, doneAll, listsGroup, taskInput } from "./selectors.js";



const listener = () => {
    addTaskBtn.addEventListener('click', addList);
    listsGroup.addEventListener('click', listGroupHandler);
    taskInput.addEventListener('keyup', taskInputHandler);
    deleteAll.addEventListener('click', deleteAllHandler);
    doneAll.addEventListener('click', doneAllHandler);
};

export default listener;