
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Beauty from './Pages/Beauty'
import Living from './Pages/Living'
import Details from './Pages/Details';
import CartDetails from './Pages/CartDetails';
import PaymentPage from './Pages/PaymentPage';



function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/kids' element={<  Kids/>} />
        <Route path='/beauty' element={<Beauty/>} />
        <Route path='/living' element={<Living/>} />
        <Route path='/Details' element={<Details/>} />
        <Route path="/cart" element={<CartDetails/>} />
         <Route path="/payment" element={<PaymentPage />} />
  

       </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
