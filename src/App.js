import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./views/Home";
import { About } from "./views/About";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/about" component={ <About />} />
          <Route exact path="/" component={ <Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
