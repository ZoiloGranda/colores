import React from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import CenteredGrid from './components/CenteredGrid';
import {Provider} from 'react-redux';
import store from './store';

function App() {
 return (<Provider store={store}>
  <div>
   <ButtonAppBar></ButtonAppBar>
   <CenteredGrid></CenteredGrid>
  </div>
 </Provider>);
}

export default App;
