import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { ToggleTodoAction, EditingTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputEdit') txtInputEdit: ElementRef;
  chkField: FormControl= new FormControl(false);
  txtInput: FormControl= new FormControl('', [Validators.required]);
  editing:boolean=false;
  constructor(private state: Store<AppState>) { } 

  ngOnInit() {
    console.log(this.todo);
    this.chkField.setValue(this.todo.completado);
    this.txtInput.setValue(this.todo.texto);
    this.chkField.valueChanges.subscribe( res => { 
      console.log(res);
      this.state.dispatch( new ToggleTodoAction(this.todo.id) )
     } )
  }
  
  edit(){
    this.editing=true;
    setTimeout(()=>{
      this.txtInputEdit.nativeElement.select();
    }, 1)
  }

  outEditing(){
    console.log('algo');
    
    this.editing=false;
    const accion =new EditingTodoAction(this.todo.id, this.txtInput.value);
    this.state.dispatch( accion ); 
  }

  deleteItem(id){
    this.state.dispatch( new DeleteTodoAction(id)); 
  }

}
