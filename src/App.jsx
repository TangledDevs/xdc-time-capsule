import Home from "./pages/Home";
import { Reducer, GlobalContext } from "./contexts/Context";
import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";
import MyMedia from "./pages/MyMedia";
import Footer from "./components/Footer";

function App() {
  const initialState = {};
  const [state, dispatch] = useReducer(Reducer, initialState);
  // const [checkTC, setCheckTC] = useState(false);
  // const [makeTC, setMakeTC] = useState(false);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<MyMedia />} />
          {/* <Route path="/create" element={<Create />} /> */}
          <Route path="/review" element={<Review />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
