import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './store/store';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
