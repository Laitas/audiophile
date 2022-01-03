import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Speakers from "./pages/Speakers";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="min-h-screen">
      <Nav/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/speakers' element={<Speakers/>}/>
      <Route path='/headphones' element={<Headphones/>}/>
      <Route path='/earphones' element={<Earphones/>}/>
      <Route path='/:page/:id' element={<Product/>}/>
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
