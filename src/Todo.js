import React from 'react';
import { observer } from 'mobx-react-lite';

import todo from './store/todo';

const Todo = observer( ()=> {
  return (
    <div>
      <button onClick={() => todo.fetchTodo()}>get todos</button>
      {todo.todos.map(item => 
        <div key={item.id}>
          <input type="checkbox" checked={item.completed} onChange={() => todo.completeTodo(item.id)}/>
          id: {item.id} title: {item.title} 
          <button onClick={() => todo.removeTodo(item.id)}>Del</button>
        </div>
      )}
    </div>
  )

})


export default Todo;

