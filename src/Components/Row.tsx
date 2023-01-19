type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const Row = ({
  todo: { id, task, isCompleted },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => (
  <div
    className={`flex w-full p-4 mb-2 justify-between items-center ${
      isCompleted ? "bg-gray-400" : "bg-green-300"
    }`}
  >
    <p
      className={`ml-2 text-xl font-sans font-medium ${
        isCompleted ? "text-white line-through" : "text-gray-700"
      }`}
    >
      {task}
    </p>
    <div className="flex items-center">
      <div className="w-1/2 flex justify-between items-center mr-2">
        <button
          className="h-5 w-5 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold text-sm rounded"
          aria-label="Delete a todo"
          onClick={() => handleDeleteTodo(id)}
        >
          X
        </button>
      </div>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-green-600"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
      />
    </div>
  </div>
);
