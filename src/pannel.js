
function Pannel({ Add_task, Swich_task_type }){

	const task_types = ["active", "completed", "deleted"];

	const Give_task_type = (e) => {

		e = e.target;
		let add_button = e.closest('div').querySelector('button');
		e = e.selectedIndex;
		if (e !== 0) {
			add_button.setAttribute('disabled', 'true');
		} else {//Работает только так
			add_button.removeAttribute("disabled");
		}

		Swich_task_type(task_types[e]);
	}

	const Give_new_task = (e) => {
		let input_feel = e.target.closest('div').querySelector('input');
		Add_task(input_feel.value);
	}

	const Handle_key_press = (e) => {
		if (e.key === 'Enter') Give_new_task(e);
	}

	return (
		<div id="pannel">
    	<input id="textRessiver" type="text" placeholder="Введите задачу..."
				onKeyDown={Handle_key_press} />
			<button onClick={Give_new_task}>Сохранить</button>
			<select onChange={Give_task_type}>
				<option>Aктивные</option>
				<option>Завершённые</option>
				<option>Удалённые</option>
			</select>
		</div>
	)
}

export default Pannel;
