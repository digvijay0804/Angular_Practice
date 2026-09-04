import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('todo-app');

  newTodo = signal('');

  todos = signal<{ test: string; done: boolean }[]>([]);

  addTodo() {
    const test = this.newTodo().trim();

    if (test === '') {
      return;
    }

    this.todos.update(list => [
      ...list,
      { test, done: false }
    ]);

    this.newTodo.set('');
  }

  toggleTodo(index: number) {
    this.todos.update(list =>
      list.map((item, i) =>
        i === index
          ? { ...item, done: !item.done }
          : item
      )
    );
  }

  deleteTodo(index: number) {
    this.todos.update(list =>
      list.filter((_, i) => i !== index)
    );
  }
}
