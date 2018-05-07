import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux';
import booksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: booksReducer
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default rootReducer;
