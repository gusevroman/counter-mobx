const { makeAutoObservable } = require("mobx");

class Todo {

  todos = [];
  
  constructor() {
    makeAutoObservable (this);
  };

  fetchTodo = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todos = [...this.todos, ...json])
  };


  addTodo (todo) {
    this.todos.push(todo);
  };

  removeTodo (id) {
    this.todos = this.todos.filter(item => item.id !== id);
  };

  completeTodo (id) {
    // this.todos = this.todos.map(item => item.id === id ? {...this.todo, completed: !item.completed} : item );
    this.todos = this.todos.map(item => 
      item.id === id 
        ? item.completed = !item.completed 
        : item );
  };
};

export default new Todo();
