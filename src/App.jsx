import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <div className="Header">
        <Header 
        nome='Dashboard José Luiz'/>
      </div>
      <div className="Main">
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
