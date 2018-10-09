import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){
    switch (action.type){
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors.map(author => Object.assign({}, author));

            default:
                return state;
    }
}
