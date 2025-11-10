import {useState} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
//import {mockCake} from '../src/test-data/mockCake.js';
import ShopPage from './components/ShopPage.jsx';
import HomePage from './components/HomePage.jsx';
import ContactPage from './components/ContactPage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return(
    <div id ="body-container">
      <Header setCurrentPage = {setCurrentPage}/>
       {currentPage === 'home' && <HomePage setCurrentPage = {setCurrentPage}/>}
       {currentPage ==='shop' && <ShopPage /> }
        {currentPage ==='shop' && <ContactPage /> }
      <Footer />
    </div>
  )
}

export default App
