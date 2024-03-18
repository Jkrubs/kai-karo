import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Research } from "./components/reseach";
import {Footer} from "./components/footer"
import { Process } from "./components/process";
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Research/>
      <Process/>
      <Footer/>
    </div>
  );
}

export default App;
