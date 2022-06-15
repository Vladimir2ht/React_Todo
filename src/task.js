

function Task({ task, id, Change_task }){
	
	const Change_task_condition = (e) => {
		let sender = e.target;
		if (sender.innerHTML) {
			task.type = "deleted";
		} else if (sender.checked) {
			task.type = "completed";
		} else {
			task.type = "active";
		}
		Change_task(task, id);
	}

	return (
		<li>
			<input className="checkbox" type="checkbox"
				defaultChecked={(task.type === "completed") ? "checked": ""}
	  		onChange={Change_task_condition}
			/>
	  	{task.text} 
	  	<button onClick={Change_task_condition} className="dellbutton">
				Удалить
			</button>
		</li>
	)
}

export default Task;
