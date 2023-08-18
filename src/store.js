import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reservationReducer from "./reducers/reservationReducer";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    reservations: reservationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
//    rootReducer,
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;