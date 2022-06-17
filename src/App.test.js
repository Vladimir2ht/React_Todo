import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Task component', () => {
	test('Renders heder', () => {
  	render(<App />);
  	const linkElement = screen.getByText(/Список задач|To Do List/i);
  	expect(linkElement).toBeInTheDocument();
	})
	test('Adding task', () => {
		render(<App />);
		userEvent.type(screen.getByRole('textbox'), "Buy Plain");
		let count1 = screen.getAllByRole('button');
		userEvent.click(screen.getByRole('button'));
		let count2 = screen.getByRole('button')

		expect(count1.length < count2.length);
	})
})
