
import './App.css';

import TopPage from './components/TopPage';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TopPage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
