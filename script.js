var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

function addTask(){
	if(taskInput.value){
		var li = document.createElement("li");
		var span = document.createElement("span");
		var button = document.createElement("button");
		

		span.textContent = taskInput.value;
		button.textContent = "Delete";
	

		li.appendChild(span);
		li.appendChild(button);
	

		taskList.appendChild(li);

		taskInput.value = "";


		button.addEventListener("click", function(){
			taskList.removeChild(li);
		});
	}
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event){
	if(event.key === "Enter"){
		addTask();
	}
});