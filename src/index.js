import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppXY from './components/APPXY';
import APPMentors from './components/APPMentors';
import APPMentorsImmer from './components/APPMentorsImmer';
import AppForm from './components/AppForm';
import AppWrap from './components/AppWrap';
import AppTheme from './components/AppTheme';
import Products from './components/Products';
import Main from './components/TodoList/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
