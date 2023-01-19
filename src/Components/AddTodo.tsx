import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";
import { ChangeEvent, FormEvent } from "react";

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => {
  return (
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
      <input className="flex-1 rounded shadow p-2 text-grey-dark mr-2" type="text" value={task} onChange={handleChange} />
      <button type="submit" aria-label="Add todo">
        <PlusIcon />
      </button>
    </form>
  );
};
