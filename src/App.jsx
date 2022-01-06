import { Suspense, lazy } from "react";
import Nav from "./components/Nav";
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import LoadingSpinner from './components/LoadingSpinner'
// PAGES 
const Homepage = lazy(() => import('./pages/Homepage'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Headphones = lazy(() => import('./pages/Headphones'));
const Earphones = lazy(() => import('./pages/Earphones'));
const Product = lazy(() => import('./pages/Product'));
const Checkout = lazy(() => import('./pages/Checkout'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <div className="min-h-screen">
      <Nav/>
      <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/speakers' element={<Speakers/>}/>
      <Route path='/headphones' element={<Headphones/>}/>
      <Route path='/earphones' element={<Earphones/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/:page/:id' element={<Product/>}/>
      </Routes>
      </Suspense>
      </div>
      <Footer />
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
