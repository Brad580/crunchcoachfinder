import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Payment from './components/Payment';
import CoachesList from './components/CoachesList';
import MockCalendar from './components/MockCalendar';
import Header from './components/Header'; 
import { PageTitleProvider } from './PageTitleContext'; 


const coaches = [
  {
    _id: '1', 
    name: 'Sean Gray',
    bio: 'Strength and conditioning specialist with a passion for transforming lives.',
    certifications: ['NASM CPT', 'Glute Specialist'],
    imageUrl: "/SeanGray.png"
  },
  {
    _id: '2',
    name: '    Terri Ware',
    bio: 'Experienced yoga instructor focused on mindful and restorative practices.',
    certifications: ['ACSM CPT', 'Nutrition, Assisted Streching and Mobility'],
    imageUrl: "/TerriWare.png"
  },
  {
    _id: '3',
    name: 'Michaela Yerse',
    bio: 'Certified nutrition coach and personal trainer specializing in holistic health.',
    certifications: ['ACE CPT', 'BSN Anatomy and Physiology'],
    imageUrl: "/MichaelaYerse.png"
  }
];

function App() {
  return (
    <PageTitleProvider>
      <Router>
        <Header /> {/* Header component displays the title */}
        <div className="App">
          <nav>
            {/* Placeholder for navigation links */}
          </nav>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<CoachesList coaches={coaches} />} />
            <Route path="/schedule/:id" element={<MockCalendar />} />
          </Routes>
        </div>
      </Router>
    </PageTitleProvider>
  );
}

export default App;
