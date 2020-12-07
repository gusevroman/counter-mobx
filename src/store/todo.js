const { makeAutoObservable } = require("mobx");

class Todo {

  todos = [
    {id: 1, title:'to run', completed: false},
    {id: 2, title:'to read the book', completed: false},
    {id: 3, title:'to get out', completed: false},
  ];

  constructor() {
    makeAutoObservable (this);

  };

  addTodo (todo) {
    this.todos.push(todo);


  };

  removeTodo (id) {
    this.todos = this.todos.filter(item => item.id !== id);

    
  };

  completeTodo (id) {
    // this.todos = this.todos.map(item => item.id === id ? {...this.todo, completed: !item.completed} : item );
    this.todos = this.todos.map(item => item.id === id ? item.completed = !item.completed : item );
  };

};

export default new Todo();
