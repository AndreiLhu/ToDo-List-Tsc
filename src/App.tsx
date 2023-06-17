import './App.css';
import React, { FunctionComponent } from 'react';
import AddTodoForm from './components/AddTodoForm';
import ToDoTable from './components/ToDoTable';

export interface ITodo {
  id: number;
  description: string;
  is_done: boolean;
}

const App: FunctionComponent = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const handleAddTodo = React.useCallback(
    (newTodo: ITodo) => {
      setTodos([...todos, newTodo]);
    },
    [todos]
  );

  const handleRemoveTodo = React.useCallback(
    (toDoToRemove: ITodo) => {
      setTodos([...todos].filter((toDo) => toDo.id !== toDoToRemove.id));
    },
    [todos]
  );

  const handleMarkAsDone = React.useCallback(
    (toDoToMark: ITodo) => {
      setTodos(
        [...todos].map((toDo) => {
          if (toDo.id === toDoToMark.id) {
            toDo.is_done = !toDo.is_done;
          }
          return toDo;
        })
      );
    },
    [todos]
  );

  return (
    <div className="App">
      <AddTodoForm handleAddTodo={handleAddTodo} />
      <ToDoTable
        toDos={todos}
        handleMarkAsDone={handleMarkAsDone}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default App;
