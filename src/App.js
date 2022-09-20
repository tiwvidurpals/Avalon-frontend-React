import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './components/common/header';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Renovation from './pages/renovation';
import HouseRemodeling from './pages/homeremodeling';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Services from './components/common/services';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Container maxWidth="lg"> */}
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/index.php" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/renovation" exact element={<Renovation />} />
          <Route path="/homeremodeling" exact element={<HouseRemodeling />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        <Footer />

        {/* </Container> */}
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
