import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Task from './task';

const task = {
	text: "Xxx xxx 2.",
	type: 'active'
};
const i = 5;

describe('Task component', () => {
	
	test('Have text', () => {
		render(<Task task={task} id={i}/>);
		expect(screen.getByText(task.text)).toBeInTheDocument();
	});
	test('Have button', () => {
		render(<Task task={task} id={i}/>);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	test('Have checkbox', () => {
		render(<Task task={task} id={i}/>);
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});


})


