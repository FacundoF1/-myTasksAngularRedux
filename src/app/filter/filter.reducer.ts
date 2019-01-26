import * as fromFilter from "./filter.actions"
const stateInitial: fromFilter.filterValid='todos';

export function filterReducer(state=stateInitial, actions: fromFilter.acctions) {
    switch (actions.type) {
        case fromFilter.SET_FILTER:
            return actions.filter;
        default:
            return state;
    }
}