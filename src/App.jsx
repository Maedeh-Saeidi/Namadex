import "./App.css";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Companies from "./pages/Companies";
import Slogan from "./components/Slogan";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header></Header>
      <HomePage></HomePage>
      <AboutUs></AboutUs>
      <Services></Services>
      <Slogan></Slogan>
      <Companies></Companies>
      <Projects></Projects>
      <ContactUs></ContactUs>
      <NewsPage></NewsPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
