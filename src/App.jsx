import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
