import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import store from './redux/store';
import ListPage from './Components/ListPageContainer.js';
import DetailsPage from './Components/DetailsPageContainer.js';

function App() {
  const [details,setDetails]=useState({});
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter history={createBrowserHistory()}>
    <Routes>
    <Route path='/' element={<ListPage details={details} setDetails={setDetails}/>}/>
    <Route path='/list' element={<ListPage details={details} setDetails={setDetails}/>}/>
    <Route path='/details' element={<DetailsPage details={details} setDetails={setDetails}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;