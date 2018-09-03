import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'font-awesome/css/font-awesome.min.css';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_vi from "./translations/vi/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
    resources: {
      en: {
        common: common_en               // 'common' is our custom namespace
      },
      vi: {
        common: common_vi
      },
  },
});

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
