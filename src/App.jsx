import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="min-h-screen">
      <Nav/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/speakers' element={<Speakers/>}/>
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
