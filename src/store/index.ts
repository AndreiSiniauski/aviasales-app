import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tabsReducer from './reducers/tabsReducer';
import filterReducer from './reducers/filterReducer';
import ticketReducer from './reducers/ticketReducer';

const rootReducer = combineReducers({
  tabsReducer,
  filterReducer,
  ticketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
