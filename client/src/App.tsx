import Providers from "./common/Providers";
import Example from "./components/Example";
import Home from "./pages/Home";

function App() {
  return (
    <Providers>
      <Home />
      <Example />
    </Providers>
  );
}

export default App;
