import './App.css';
import Look from './Components/Look';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Commen/Header';
import { Routes, Route } from 'react-router-dom';
import Productpage from './Components/Productpage';
import Localstore from './Components/Localstore';
import Thebarnd from './Components/Thebarnd';
import Signin from './Components/Signin';
import Footer from './Components/Commen/Footer';
import Mens from './Components/Commen/Mens';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/mens" element={<Mens />}/>
      <Route path="/productpage" element={<Productpage />}/>
      <Route path="/thebrand" element={<Thebarnd />}/>
      <Route path="/localstore" element={<Localstore/>}/>
      <Route path="/lookbook" element={<Look/>}/>
      <Route path="/Signin" element={<Signin/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
