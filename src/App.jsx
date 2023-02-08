import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Error from './components/Error'
import Customers from './components/Customers';
import Services from './components/Services';
import Dismantling from './components/Dismantling';
import DetailsWithSmallImg from './components/DetailsWithSmallImg';

import './app.css'
import {  DataProvider } from './components/ContextProviders/DataProvider';
import Purchase from './components/Purchase';
import AutoTransport from './components/AutoTransport';
import BuyingAssistance from './components/BuyingAssistance';
import Warehousing from './components/Warehousing';

function App() {
  return (
    <Router>
      <DataProvider>
          <MyNavbar />
          <div className="controller">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/buyingAssistance' element={<BuyingAssistance />} />
              <Route path='/autoTransport' element={<AutoTransport />} />
              <Route path='/warehousing' element={<Warehousing />} />
              <Route path='/automobileLoading' element={<DetailsWithSmallImg />} />
              <Route path='/motorcycleLoading' element={<DetailsWithSmallImg />} />
              <Route path='/boat' element={<DetailsWithSmallImg />} />
              <Route path='/heavyMachinery' element={<DetailsWithSmallImg />} />
              <Route path='/dismantling' element={<Dismantling />} />
              <Route path='/purchase' element={<Purchase />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </div>
          <Footer />
      </DataProvider>
    </Router>
  );
}

export default App;
