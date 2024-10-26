import { addList, tasks} from "./lists.js";


const initialRender = () => {
    console.log("Start work");
    tasks.forEach((task) => addList(task));
    console.log(tasks);
}

export default initialRender;