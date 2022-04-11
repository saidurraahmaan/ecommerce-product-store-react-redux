import './App.css';
import Header from "./containers/Header";
import {Routes,Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Error from "./containers/Error";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<ProductListing/>}/>
            <Route path='/product/:productId' element={<ProductDetails/>}/>
            <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  );
}

export default App;
