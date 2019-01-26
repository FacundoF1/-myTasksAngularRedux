import { Component, OnInit } from '@angular/core';
import { AppState } from './app.reducer';
import { Store } from '@ngrx/store';
import { AllToggleTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completed: boolean=false;
  constructor(private state: Store<AppState>) { }

  ngOnInit() {}

  allToggle(){
    this.completed=!this.completed;
    console.log(this.completed);
    this.state.dispatch( new AllToggleTodoAction( this.completed ));
  }

}
