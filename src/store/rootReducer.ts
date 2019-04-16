import { createStore, combineReducers } from 'redux'


const rootReducer = combineReducers({
    
})


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(rootReducer);