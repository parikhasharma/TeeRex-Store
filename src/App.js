import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { Route,Routes } from "react-router-dom";
import "./App.css"
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [customData,setCustomData]=useState([]);
  const [loading,setLoading]=useState(true);
  const performAPICall = async () => {
    try {
      const response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then(res=>res.json()).then(data =>data)
      setProducts(response);
      setCustomData(response);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
    } 
  };
  useEffect(()=>{
     performAPICall();
  },[])
  return (
    <div className="App">
      <Routes>
     <Route path='/' element={<Products products={products} setProducts={setProducts} customData={customData} cart={cart} setCart={setCart} loading={loading}/>}/>
     <Route path='/cart' element={<Cart cart={cart} setCart={setCart} customData={customData}/>}/>
    </Routes>
    </div>
  );
}

export default App;
