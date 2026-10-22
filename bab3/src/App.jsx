import './App.css'
import { Route, Routes } from 'react-router-dom'
import AppNavigation from './component/AppNavigation' 
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'
import HeaderBanner from './component/HeaderBanner'
import LayoutGrid from './component/LayoutGrid'
import CardStatusDemo from './component/CardStatusDemo'
import TransactionManager from './component/TransactionManager'

function App() {
  return (
    <div>
      {/* Menu Navigasi di atas agar tampil seperti video */}
      <AppNavigation />

      {/* Konten Halaman Berdasarkan Routing */}
      <div className="container mt-4">
        <Routes>
          <Route path='/' element={<HeaderBanner />} />
          <Route path='/transaksi' element={<TransaksiItem />} />
          <Route path='/kartu' element={<KartuRingkasan />} />
          <Route path='/badge' element={<Badge tipe="Pemasukan">Contoh Badge</Badge>} />
          <Route path='/wallet' element={<WalletSummary />} />
          <Route path='/headerbanner' element={<HeaderBanner />} />
          <Route path='/layoutgrid' element={<LayoutGrid />} />
          <Route path='/cardstatusdemo' element={<CardStatusDemo />} />
          <Route path='/transactionmanager' element={<TransactionManager />} />
        </Routes>
      </div>
    </div>
  )
}

export default App