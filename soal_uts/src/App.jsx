import './assets/style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';
import Beranda from './pages/Beranda';
import LainLain from './pages/LainLain';
import Mahasiswa from './pages/Mahasiswa/';
import Pendidikan from './pages/Pendidikan';
import Profil from './pages/Profil';
import Riset from './pages/Riset';

// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/lain-lain" element={<LainLain />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      <SideBar />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 