import React from 'react';
import { observer } from 'mobx-react-lite';

import todo from './store/todo';

const Todo = observer( ()=> {
  return (
    <div>
      {todo.todos.map(item => 
        <div key={item.id}>
          <input type="checkbox" checked={item.completed} onChange={() => todo.completeTodo(item.id)}/>
          {item.title}
          <button onClick={() => todo.removeTodo(item.id)}>
            Del
          </button>
        </div>
      )}
    </div>
  )

})


export default Todo;

