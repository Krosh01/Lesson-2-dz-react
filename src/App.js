import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header"
import './scss/style.scss'
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Nashi from "./components/Nashi/Nashi";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Home/>
      <Portfolio/>
      <Services/>
      <Nashi/>
    </main>
    <Footer/>
      
    </>
  );
}

export default App;
