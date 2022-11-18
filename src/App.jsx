import { BrowserRouter } from "react-router-dom";
import EcomRouter from "./routes/EcomRouter";

function App() {
  return (
    <>
      <BrowserRouter>

        <EcomRouter />

      </BrowserRouter>
    </>
  );
}

export default App;
