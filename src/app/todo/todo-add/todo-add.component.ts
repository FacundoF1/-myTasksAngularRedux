import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromTodo from "../todo.actions";
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  }

  addTodo(){
    console.log( this.txtInput.valid, this.txtInput.value );
    if(this.txtInput.invalid)return;
    this.store.dispatch( new fromTodo.AgregarTodoAction(this.txtInput.value) );
    this.txtInput.setValue('');
  }

}
