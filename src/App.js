import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Payment from './components/Payment';
import CoachesList from './components/CoachesList';
import MockCalendar from './components/MockCalendar';

// Actual coach data
const coaches = [
  {
    id: '1',
    name: 'Sean Gray',
    bio: 'Strength and conditioning specialist with a passion for transforming lives.',
    certifications: ['CPT', 'CSCS'],
    imageUrl: "/SeanGray.png" 
  },
  {
    id: '2',
    name: 'Terri Ware',
    bio: 'Experienced yoga instructor focused on mindful and restorative practices.',
    certifications: ['RYT-200', 'RYT-500'],
    imageUrl: "/TerriWare.png"
  },
  {
    id: '3',
    name: 'Michaela Yerse',
    bio: 'Certified nutrition coach and personal trainer specializing in holistic health.',
    certifications: ['CNC', 'CPT'],
    imageUrl: "/MichaelaYerse.png"
  }
];

function App() {
  return (
    <Router>
      <h1>Coach Finder</h1>
      <div className="App">
        <nav>
          {/* Navigation Links */}
        </nav>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<CoachesList coaches={coaches} />} />
          <Route path="/schedule/:id" element={<MockCalendar />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
