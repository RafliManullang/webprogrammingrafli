import '../styles/transaksi.css';
import React from 'react';

export default function Badge({ tipe, children }) {
  const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
  return (
    
    <div className="container mt-4">
      <h3>Halaman Badge</h3>
      <span className={className}>{children}</span>;
      <span className="badge bg-primary">Informasi Saldo Aktif</span>
    </div>
  );
}