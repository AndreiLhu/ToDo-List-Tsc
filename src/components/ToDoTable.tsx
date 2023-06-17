import { FunctionComponent } from 'react';
import { ITodo } from '../App';

const tableDefinitions: string[] = ['Id', 'Description', 'Completed', 'Remove'];

interface IToDoTableProps {
  toDos: ITodo[];
  handleRemoveTodo: (toDoToRemove: ITodo) => void;
  handleMarkAsDone: (toDoToMark: ITodo) => void;
}

const ToDoTable: FunctionComponent<IToDoTableProps> = (props) => {
  const { toDos, handleRemoveTodo, handleMarkAsDone } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableDefinitions.map((tableDefinition, index) => (
              <th key={index}> {tableDefinition} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDo, index) => (
            <tr key={index}>
              <td> {toDo.id} </td>
              <td> {toDo.description} </td>
              <td onClick={() => handleMarkAsDone(toDo)}>
                {toDo.is_done ? ' done ' : 'not done'}{' '}
              </td>
              <td onClick={() => handleRemoveTodo(toDo)}> x </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ToDoTable;
