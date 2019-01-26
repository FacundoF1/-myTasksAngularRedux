import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filter?: fromFilter.filterValid): any {
    
    console.log(todo);
    console.log(filter);
    return todo.filter( todo => (filter=='todos')?todo:(filter=='completados')?todo.completado:!todo.completado )
    
  }

}
