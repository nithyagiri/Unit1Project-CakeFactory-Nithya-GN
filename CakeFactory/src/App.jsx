import {useState} from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ShopPage from './components/pages/cakes/ShopPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import {mockCake} from './test-data/mockCake';
import OrderPage from './components/pages/order/OrderPage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake,setSelectedCake]=useState(null);
return(
  <div id="body-container">
    <Header setCurrentPage={setCurrentPage} />
    {currentPage ==='home' && <HomePage setCurrentPage={setCurrentPage} />}
    {currentPage ==='shop' && <ShopPage cakes= {mockCake} setCurrentPage={setCurrentPage} setSelectedCake={setSelectedCake}/>}
    {currentPage ==='order' &&<OrderPage cake={selectedCake} setCurrentPage={setCurrentPage}/>}
    {currentPage ==='contact' && <ContactPage />}

    <Footer />
  </div>
)
}


export default App
