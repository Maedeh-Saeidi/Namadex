import "./App.css";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Header></Header>
      <HomePage></HomePage>
      <AboutUs></AboutUs>
      <Services></Services>
    </div>
  );
}

export default App;
