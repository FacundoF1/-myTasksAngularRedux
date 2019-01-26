import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../filter/filter.actions'
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filterValid: fromFilter.filterValid [] = ['todos', 'completados', 'pendientes'];
  filterSeleted: fromFilter.filterValid;
  statePendients; 
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => { this.filterSeleted=state.filter; this.countState(state.todos) } )
  }

  changeFilter( item: fromFilter.filterValid ){
    this.store.dispatch( new fromFilter.SetFilterAction(item) )
  }

  countState( todos: Todo[] ){
    this.statePendients = todos.filter( todo => !todo.completado ).length;
  }
}
