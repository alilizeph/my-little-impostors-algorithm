import logo from './logo.svg';
import './App.css';
import { AmongUs } from "./components/AmongUs/among-us";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";

function App() {
  return (
    <div className="App">
        <Header />
        <AmongUs />
        <Footer />
    </div>
  );
}

export default App;
