import React from 'react';
import ReactDOM from 'react-dom';
import has from "lodash/has";
import { Provider } from 'react-redux';
import store from './_redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IS_LOADED } from './_redux/action/types';
import Auth from './_services/Auth';
import Helper from './_services/Helper';

const auth = Auth.isLoggedIn(true);

if(auth !== ""){
  window._axios.defaults.headers.common['Authorization'] = auth._token;
  const helper = new Helper();
  helper.api('/user', function(response) {
      if(has(response, 'message')){
        return Auth.logout();
      }
      let newAuth = {...auth};
      newAuth._user = response;
      Auth.updateAuth(newAuth);
      store.dispatch({type:IS_LOADED, data: true});
  }, auth);
}else{
  store.dispatch({type:IS_LOADED, data: true});
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
