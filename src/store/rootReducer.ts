import { createStore, combineReducers } from 'redux'

import { currentStepReducer } from './../features/Form/reducers/currentStepReducer'
import { userDataReducer } from './../features/Form/reducers/userDataReducer'

const rootReducer = combineReducers({
    currentStep: currentStepReducer,
    userData: userDataReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(rootReducer);