import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todoList;
  constructor(private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('todos').subscribe( state => this.todoList=state )
  }

}
