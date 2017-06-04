import { applyMiddleware, combineReducers, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null, 
}

const reducer = (state={}, action) => {
    switch(action.type){
        case "FETCH_USERS_START": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "RECEIVE_USERS": {
            return {...state, fetching: false, fetched: true, users: action.payload}
            break;
        }
    }
    return state;
};

const middleware = applyMiddleware(thunk,createLogger());
const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch((dispatch) => {
    dispatch({type: "FETCH_USERS_START"})
    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((respond) => {
            dispatch({type: "RECEIVE_USERS", payload: respond.data})
        })
        .catch((err)=>{
            dispatch({type: "FETCH_USERS_ERROR", payload: err})
        })
})


// ========================================

