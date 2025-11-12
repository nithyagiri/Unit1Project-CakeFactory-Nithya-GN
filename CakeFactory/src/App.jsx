
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CakeCard from'./components/CakeCard.jsx';
import {mockCake} from './test-data/mockCake';

function App() {
  const cakeJSX=[...mockCake].map(cake=>{
    return<CakeCard key={cake.id} cake ={cake}/>
  })
return(
  <div id="body-container">
    <Header />
    <div id="cake-card-container">
      {cakeJSX}
    </div>
    <Footer />
  </div>
)
}


export default App
