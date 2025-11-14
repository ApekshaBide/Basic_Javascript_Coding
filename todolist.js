let tasks = [];

function addTask(task){
  tasks.push(task);
  console.log("Task",task)

}
function removeTask(index){
tasks.splice(index,1);
console.log("Remove task")
}
function showTasks(){
  console.log("Tasks List:")
}

addTask("Buy groceries");
addTask("Walk the dog");
removeTask(0);