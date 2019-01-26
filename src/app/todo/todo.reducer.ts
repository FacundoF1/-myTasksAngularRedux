import * as fromTodo from './todo.actions'
import { Todo } from './model/todo.model';

const todo1 = new Todo('Pantalla inicio');
const todo2 = new Todo('Crear Modelos');
const todo3 = new Todo('Crear Servicios');
const todo4 = new Todo('Probar');

todo2.completado=true;

const estadoInicial: Todo[]=[todo1, todo2, todo3, todo4];
export function todoReducer(state= estadoInicial, action: fromTodo.Accions ): Todo[] {

    switch (action.type) {
        
        case fromTodo.AGREGAR_TODO:
            return [...state, new Todo(action.texto)];

        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ){
                    return{ ...todoEdit, completado: !todoEdit.completado }
                }else{
                    return todoEdit;
                }
            })
        
        case fromTodo.EDITING_TODO:
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ){
                    return{ ...todoEdit, texto: action.texto }
                }else{
                    return todoEdit;
                }
            })

        case fromTodo.DELETE_TODO:
            return state.filter( todoEdit => todoEdit.id !== action.id);
        
        case fromTodo.ALLTOGGLE_TODO:
            return state.map(todoEdit => {
                return {...todoEdit, completado: action.completado }
            });
        
        case fromTodo.DELETECOMPLETED_TODO:
            return  state.filter( todoDelete => !todoDelete.completado);

        default:
            return state;
    }

}