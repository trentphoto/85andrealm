import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
});

const store = (initialState: RootState | {} = {}) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;