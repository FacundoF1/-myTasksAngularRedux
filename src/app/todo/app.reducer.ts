import { Todo } from "./model/todo.model";
import { ActionReducerMap } from "@ngrx/store";

import * as fromTodo from './todo.reducer';
import * as fromFilter from "../filter/filter.reducer";
import * as fromFilterActions from "../filter/filter.actions";

export interface AppState{
    todos: Todo[];
    filter: fromFilterActions.filterValid;
}

export const appReducer: ActionReducerMap<AppState>={
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer,
}