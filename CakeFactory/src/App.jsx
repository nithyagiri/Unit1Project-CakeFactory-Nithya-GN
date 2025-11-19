import {useState} from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ShopPage from './components/pages/cakes/ShopPage.jsx';
import HomePage from './components/pages/home/HomePage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import {mockCake} from './test-data/mockCake';
import OrderPage from './components/pages/order/OrderPage.jsx';
import CheckoutPage from './components/pages/checkout/CheckoutPage.jsx';
import PaymentPage from './components/pages/payment/PaymentPage.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake,setSelectedCake]=useState(null);
  const [cart, setCart] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [orderTotal, setOrderTotal] = useState(0);
return(
  <div id="body-container">
    <Header setCurrentPage={setCurrentPage} />
    {currentPage ==='home' && <HomePage setCurrentPage={setCurrentPage} setSelectedCake={setSelectedCake} />}
    {currentPage ==='shop' && <ShopPage cakes= {mockCake} setCurrentPage={setCurrentPage} setSelectedCake={setSelectedCake}/>}
    {currentPage ==='order' &&<OrderPage cake={selectedCake} setCurrentPage={setCurrentPage} setCart={setCart} editingItemId={editingItemId} setEditingItemId={setEditingItemId}/>}
    {currentPage === 'checkout' && <CheckoutPage cart={cart} setCart={setCart} setCurrentPage={setCurrentPage} setEditingItemId={setEditingItemId} setSelectedCake={setSelectedCake} setOrderTotal={setOrderTotal} />}
    {currentPage === 'payment' && (<PaymentPage setCurrentPage={setCurrentPage} total={orderTotal} />)}
    {currentPage ==='contact' && <ContactPage />}
    <Footer />
  </div>
)
}


export default App
