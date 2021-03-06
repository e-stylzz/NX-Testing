import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@stylzz/data';

// interface Todo {
//   title: string;
// }

@Component({
  selector: 'stylzz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];
  //todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
  }

  addTodo() {
    // this.todos.push({
    //   title: `New todo ${Math.floor(Math.random() * 1000)}`
    // });

    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
