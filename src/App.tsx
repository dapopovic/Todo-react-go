import { useState } from 'react';

type Todo = {
	id: string;
	title: string;
	text: string;
	done: boolean;
	dueDate?: Date;
	reminder?: Date;
	repeat: boolean;
};

function App() {
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: '1',
			title: 'Learn React',
			text: 'something special',
			done: false,
			repeat: false,
		},
		{
			id: '2',
			title: 'Learn TypeScript',
			text: 'something special',
			done: false,
			dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
			repeat: false,
		},
		{
			id: '3',
			text: 'Learn Next.js',
			title: 'something special',
			done: false,
			dueDate: new Date(new Date().setDate(new Date().getDate() + 2)),
			repeat: true,
		},
	]);

	const toggleTodo = (id: string) => {
		setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
	};

	return (
		<div className=''>
			<div className='h-12 text-white bg-blue-600'></div>
			<div className='flex justify-between h-full m-4'>
				<div className='flex'>
					<button className='flex flex-col items-center justify-between p-3 rounded w-9 h-9 hover:bg-gray-200'>
						<div className='w-4 h-px bg-black rounded-full'></div>
						<div className='w-4 h-px bg-black rounded-full'></div>
						<div className='w-4 h-px bg-black rounded-full'></div>
					</button>
					<div className='flex flex-col'>
						<h1 className='text-xl font-semibold p-[6px]'>
							<span>Todos</span>
						</h1>
						<p className='text-xs font-normal text-gray-500'>
							<span>{new Date().toLocaleDateString()}</span>
						</p>
					</div>
					<button className='flex items-center justify-between p-3 w-9 h-9 hover:bg-gray-200'>
						<div className='w-0.5 h-0.5 bg-black'></div>
						<div className='w-0.5 h-0.5 bg-black'></div>
						<div className='w-0.5 h-0.5 bg-black'></div>
					</button>
				</div>
				<div className='flex items-center gap-2'>
					<button className='flex items-center justify-center w-10 h-10 p-2 rounded hover:bg-gray-200'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='w-full h-full text-gray-500' fill='currentColor'>
							<path d='M323-450v-316L202-645l-42-42 193-193 193 193-42 42-121-121v316h-60ZM607-80 414-273l42-42 121 121v-316h60v316l121-121 42 42L607-80Z' />
						</svg>
					</button>
					<button className='flex items-center justify-center w-10 h-10 p-2 rounded hover:bg-gray-200'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='w-full h-full text-gray-500' fill='currentColor'>
							<path d='M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180Zm147-60v-600H180v600h147Zm60 0h393v-600H387v600Zm-60 0H180h147Z' />
						</svg>
					</button>
					<button className='flex items-center justify-center w-10 h-10 p-2 rounded hover:bg-gray-200'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' className='w-full h-full text-gray-500' fill='currentColor'>
							<path d='M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80ZM318-223v-60h324v60H318Zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344H323Zm22-60h271q48-32 76-83t28-110q0-99-70.5-169.5T480-837q-99 0-169.5 70.5T240-597q0 59 28 110t77 83Zm135 0Z' />
						</svg>
					</button>
				</div>
			</div>
			{/* divider */}
			<div className='h-px m-4 bg-gray-200'></div>
			<div className='m-4 group'>
				<div className='flex p-4 text-lg text-blue-500 bg-white h-14 drop-shadow-2xl'>
					<button className=''>
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
						</svg>
						<span className='sr-only'>Add Todo</span>
					</button>
					<input
						type='text'
						className='flex-grow focus:outline-none placeholder:text-blue-500 focus:placeholder:text-black focus:text-black '
						placeholder='Add a Task'
					/>
				</div>
				<div className='h-0 transition-all duration-200 ease-in-out shadow bg-gray-50 group group-focus-within:h-12'>
					<div className='flex items-center justify-between opacity-0 p-4 transition-all ease-in-out before:delay-200 transform group group-focus-within:opacity-100'>
						<p className='text-sm font-semibold text-gray-500'>Today</p>
						<button className='items-center justify-center w-6 h-6 rounded hover:bg-gray-200 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 -960 960 960'
								className='w-full h-full text-gray-500'
								fill='currentColor'
							>
								<path d='M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180Zm147-60v-600H180v600h147Zm60 0h393v-600H387v600Zm-60 0H180h147Z' />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
