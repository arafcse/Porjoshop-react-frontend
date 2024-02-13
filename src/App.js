
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {Shop} from './Pages/Shop';
import {ShopCategory} from './Pages/ShopCategory';
import {Product} from './Pages/Product';
import {Cart} from './Pages/Cart';
import {LoginSignup} from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import bag_banner from './Components/Assests/banner_mens.png';
import cloth_banner from './Components/Assests/banner_kids.png';
import tent_banner from './Components/Assests/banner_women.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/bags' element={<ShopCategory banner={bag_banner} category="men"/>}/>
        <Route path='/cloths' element={<ShopCategory banner={cloth_banner} category="women"/>}/>
        <Route path='/tents' element={<ShopCategory banner={tent_banner} category="kid"/>}/>
        <Route path='/others' element={<ShopCategory category="others"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
