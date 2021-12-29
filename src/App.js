import "./sass/App.scss";

import TopPage from "./components/TopPage";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import WorkExamples from "./components/WorkExamples";

function App() {
  return (
    <div className="App">
      <Header />
      <TopPage />
      <About />
      <TechStack />
      <WorkExamples />
      <Footer />
    </div>
  );
}

export default App;
