import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['carts'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
