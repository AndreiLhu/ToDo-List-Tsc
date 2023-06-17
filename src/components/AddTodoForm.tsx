import React, { FunctionComponent, ChangeEvent } from 'react';
import { ITodo } from '../App';

let toDoId = 1;

interface IAddTodoFormProps {
  handleAddTodo: (newTodo: ITodo) => void;
}

const AddTodoForm: FunctionComponent<IAddTodoFormProps> = (props) => {
  const { handleAddTodo } = props;

  const [toDoContent, setToDoContent] = React.useState<string>('');

  const onHandleUpdateToDo = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    setToDoContent(currentValue);
  };

  const handleTodoSubmit = () => {
    handleAddTodo({
      id: toDoId,
      description: toDoContent as string,
      is_done: false,
    });
    toDoId++;
    setToDoContent(' ');
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={toDoContent}
          onChange={onHandleUpdateToDo}
          className="inputfield"
        />
        <button
          onClick={handleTodoSubmit}
          className="buttonfield"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};
export default AddTodoForm;
