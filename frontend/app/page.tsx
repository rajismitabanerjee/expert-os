import React from 'react';

export default function HomePage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>
        Home Page Works!
      </h1>
      <a href="/test-m2" style={{ color: 'blue', textDecoration: 'underline', marginTop: '20px', display: 'block' }}>
        Go to Member 2 Test Page
      </a>
    </div>
  );
}