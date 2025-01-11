import "./App.css";
import "./fonts/IRANSans 400.ttf";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Slogan from "./components/Slogan";
import Companies from "./pages/Companies";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";
import Process from "./pages/Process";
import { SectionsProvider } from "./components/SectionsContext";

function App() {
  return (
    <div className="font-IRANSans">
      <SectionsProvider>
        <HomePage />
        <AboutUs />
        <Services />
        <Slogan />
        <Companies />
        <Process />
        <Projects />
        <ContactUs />
        <NewsPage />
        <Footer />
      </SectionsProvider>
    </div>
  );
}

export default App;
