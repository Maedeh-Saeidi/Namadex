import "./App.css";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Companies from "./pages/Companies";

function App() {
  return (
    <div>
      <Header></Header>
      <HomePage></HomePage>
      <AboutUs></AboutUs>
      <Services></Services>
      <Companies></Companies>
    </div>
  );
}

export default App;
