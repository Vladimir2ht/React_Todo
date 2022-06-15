import { useState } from 'react';
import Pannel from './pannel';
import Task from './task';

function App() {

	let [tasks, set_tasks] = useState([])
	let [request_task_type, set_task_type] = useState('');
  
	const Add_task = (text) => {
		if (!(text)) return;
		let new_task = {
			text,
			type: 'active'
		}
		set_tasks([...tasks, new_task])
	}

	const Change_task = (task, id) => {
		if (task.type === "deleted" && request_task_type === "deleted") {
			 tasks.splice(id, 1);
			 set_tasks([...tasks]);
		} else {
			tasks[id] = task;
			if (task.type === "deleted") set_tasks([...tasks])
		}
	}

	const Swich_task_type = (task_type) => {
		set_task_type(task_type);
	}

	return (
    <div id="mainelement">
      <h1>Список задач</h1>
      <div>
        <Pannel Add_task={Add_task} Swich_task_type={Swich_task_type}/>
        <ul>
					{tasks.map((task, i) => {
						if (task.type === request_task_type) return <Task 
						task={task} id={i}	Change_task={Change_task}/>
					})}
				</ul>
			</div>
    </div>
  )
}

export default App;
