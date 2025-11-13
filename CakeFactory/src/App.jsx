
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {mockCake} from './test-data/mockCake';
import ShopPage from './components/ShopPage.jsx';

function App() {
  
return(
  <div id="body-container">
    <Header />
    <ShopPage cakes= {mockCake}/>
    <Footer />
  </div>
)
}


export default App
