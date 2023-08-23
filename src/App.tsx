import { useState } from "react";
import { IconButton } from "./Components/IconButton";

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
      id: "1",
      title: "Learn React",
      text: "something special",
      done: false,
      repeat: false,
    },
    {
      id: "2",
      title: "Learn TypeScript",
      text: "something special",
      done: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      repeat: false,
    },
    {
      id: "3",
      text: "Learn Next.js",
      title: "something special",
      done: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 2)),
      repeat: true,
    },
  ]);

  const [todo, setTodo] = useState<Todo>({
    id: "",
    title: "",
    text: "",
    done: false,
    repeat: false,
  });

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="">
      <div className="h-12 text-white bg-blue-600"></div>
      <div className="flex justify-between h-full m-4">
        <div className="flex">
          <button className="flex flex-col items-center justify-between p-3 rounded w-9 h-9 hover:bg-gray-200">
            <div className="w-4 h-px bg-black rounded-full"></div>
            <div className="w-4 h-px bg-black rounded-full"></div>
            <div className="w-4 h-px bg-black rounded-full"></div>
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold p-[6px]">
              <span>Todos</span>
            </h1>
            <p className="text-xs font-normal text-gray-500">
              <span>{new Date().toLocaleDateString()}</span>
            </p>
          </div>
          <IconButton
            tooltip="List Options Menu"
            icon={
              <div className="flex items-center justify-between w-4 rounded">
                <div className="w-0.5 h-0.5 bg-black"></div>
                <div className="w-0.5 h-0.5 bg-black"></div>
                <div className="w-0.5 h-0.5 bg-black"></div>
              </div>
            }
            showTooltipNextToIcon={false}
          />
        </div>

        <div className="flex items-center gap-2">
          <IconButton
            tooltip="Sort"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M323-450v-316L202-645l-42-42 193-193 193 193-42 42-121-121v316h-60ZM607-80 414-273l42-42 121 121v-316h60v316l121-121 42 42L607-80Z" />
              </svg>
            }
          />
          <IconButton
            tooltip="Group"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180Zm147-60v-600H180v600h147Zm60 0h393v-600H387v600Zm-60 0H180h147Z" />
              </svg>
            }
          />
          <IconButton
            tooltip="Suggestions"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-full h-full text-gray-500"
                fill="currentColor"
              >
                <path d="M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80ZM318-223v-60h324v60H318Zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344H323Zm22-60h271q48-32 76-83t28-110q0-99-70.5-169.5T480-837q-99 0-169.5 70.5T240-597q0 59 28 110t77 83Zm135 0Z" />
              </svg>
            }
          />
        </div>
      </div>
      {/* divider */}
      <div className="h-px m-4 bg-gray-200"></div>
      <form className="m-4 group">
        <div className="flex flex-col justify-center text-lg text-blue-500 drop-shadow-xl ">
          <div className="z-10 flex items-center p-4 bg-white rounded h-14 focus-within:rounded-b-none focus-within:border-b ">
            <button className="flex items-center mr-2" type="button">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="sr-only">Add Todo</span>
            </button>
            <input
              type="text"
              className="w-full text-sm focus:outline-none placeholder:text-blue-500 focus:placeholder:text-black focus:text-black"
              placeholder="Add a Task"
              value={todo.title}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          {/* hidden behind the bar opacity-0 -translate-y-14*/}
          <div className="flex items-center justify-between px-4 py-1 transition-all rounded-b h-11 bg-gray-50 group-focus-within:opacity-100 group-focus-within:translate-y-0 ">
            <div className="flex items-center flex-1 gap-2">
              <button
                className="items-center justify-center p-1 rounded hover:bg-gray-200 "
                type="button"
              >
                <svg
                  className="w-full h-full text-gray-500"
                  fill="currentColor"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"></path>
                </svg>
              </button>
              <button
                className="items-center justify-center p-1 rounded hover:bg-gray-200 "
                type="button"
              >
                <svg
                  className="w-full h-full text-gray-500"
                  fill="currentColor"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center p-1.5 text-sm bg-white border border-gray-200 rounded hover:bg-gray-200 disabled:cursor-not-allowed disabled:hover:bg-white disabled:text-gray-400"
              disabled={!todo.title}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
