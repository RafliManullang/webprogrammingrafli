import { useState, useEffect } from 'react';
import React from 'react';

export default function KartuRingkasan() {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transaksi')
      .then ((response) => response.json())
      .then((data) => setTransaksi(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Ringkasan Transaksi</h3>
      <p className="fw-bold text-primary">Total Saldo: Rp 2.500.000</p>
      <table className="table">
        <tbody>
          {Array.isArray(transaksi) && transaksi.length > 0 ? (
            transaksi.map((item, index) => (
              <tr key={item.id || index}>
                <td>{index + 1}</td>
                <td>{item.keterangan}</td>
                <td>{item.nominal}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Belum ada data transaksi (Server Offline).</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}