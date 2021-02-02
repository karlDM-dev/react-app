import React from 'react';
//Pages
import Home from './pages/Home';
//Global Style
import GlobalStyles from './components/GlobalStyles';
//Router
import {Route} from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <GlobalStyles/>
      <Route path={['/game/:id', '/']}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
