import { Action } from "@ngrx/store"
export const AGREGAR_TODO= '[TODO] Agregar state todo';
export const TOGGLE_TODO= '[TODO] Cambiar state todo';
export const EDITING_TODO= '[TODO] Editar state todo';
export const DELETE_TODO= '[TODO] Eliminar state todo';
export const ALLTOGGLE_TODO= '[TODO] Editar todos los state';
export const DELETECOMPLETED_TODO= '[TODO] Eliminar state completados';

export class DeleteCompletedTodoAction implements Action{
    readonly type = DELETECOMPLETED_TODO;
    constructor(){}
}

export class AllToggleTodoAction implements Action{
    readonly type = ALLTOGGLE_TODO;
    constructor(public completado: boolean){}
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;
    constructor( public id:number ){}
}

export class EditingTodoAction implements Action{
    readonly type = EDITING_TODO;
    constructor( public id:number, public texto:string ){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor( public id:number ){}
}

export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor( public texto:string ){}
}
export type Accions = AgregarTodoAction|ToggleTodoAction|EditingTodoAction|DeleteTodoAction|AllToggleTodoAction|DeleteCompletedTodoAction;