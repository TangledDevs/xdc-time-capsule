import Home from "./pages/Home";
import { Reducer, GlobalContext } from "./contexts/Context";
import { useReducer } from "react";

function App() {
  const initialState = {};
  const [state, dispatch] = useReducer(Reducer, initialState);
  // const [checkTC, setCheckTC] = useState(false);
  // const [makeTC, setMakeTC] = useState(false);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      <Home />
    </GlobalContext.Provider>
  );
}

export default App;
