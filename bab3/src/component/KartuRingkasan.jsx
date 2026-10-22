import React, { useState, useEffect } from 'react';

function KartuRingkasan() {
  const [transaksi, setTransaksi] = useState([]);
  const [ambilData, setAmbilData] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/transaksi')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data diterima:', data);
        setTransaksi(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  const cardStyle = {
        padding: '20px',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        marginBottom: '15px'
    };
    const textStyle = {
        fontWeight: 'bold',
        color: '#0d6efd'
    };

  return (
    <div style={cardStyle}>
            <p style={textStyle}>Total Saldo: Rp 2.500.000</p>
        </div>
  );
}

export default KartuRingkasan;