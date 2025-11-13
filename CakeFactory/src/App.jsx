import {useState} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {mockCake} from './test-data/mockCake';
import ShopPage from './components/ShopPage.jsx';
import HomePage from './components/HomePage.jsx';
import ContactPage from './components/ContactPage.jsx';

function App() {
  const [currentPage, setCurrentPAge] = useState('contact');
return(
  <div id="body-container">
    <Header />
    {currentPage=='home' && <HomePage />}
    {currentPage=='shop' && <ShopPage cakes= {mockCake}/>}
    {currentPage=='contact' && <ContactPage />}
    <Footer />
  </div>
)
}


export default App
