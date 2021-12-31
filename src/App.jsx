import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
