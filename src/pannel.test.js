import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pannel from './pannel';

const Add_task = jest.fn();
const Swich_task_type = jest.fn();

describe('Button', () => {
	test('Have button', () => {
		render(<Pannel Add_task={Add_task} Swich_task_type={Swich_task_type}/>);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	test('Button function', () => {
		render(<Pannel Add_task={Add_task} Swich_task_type={Swich_task_type}/>);
		userEvent.type(screen.getByRole('textbox'), "Buy Plain");
		userEvent.click(screen.getByRole('button'));
		expect(Add_task).toHaveBeenCalled();//Врятле должен всегда работать
	});
})

describe('Select', () => {
	test('Options count', () => {
		render(<Pannel Add_task={Add_task} Swich_task_type={Swich_task_type}/>);
		expect(screen.getAllByRole('option').length >= 3);
	});
	test('Swich_task_type', () => {
		render(<Pannel Add_task={Add_task} Swich_task_type={Swich_task_type}/>);
		userEvent.selectOptions(screen.getByRole('combobox'), "Завершённые");
		userEvent.selectOptions(screen.getByRole('combobox'), "Aктивные");
		expect(Swich_task_type).toHaveBeenCalledTimes(2);
	});
})
