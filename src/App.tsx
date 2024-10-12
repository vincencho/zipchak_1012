import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CommunityTypeSelection from './pages/CommunityTypeSelection';
import CommunityAuth from './pages/CommunityAuth';
import IdentityVerification from './pages/IdentityVerification';
import ServiceExplanation from './pages/ServiceExplanation';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderComplete from './pages/OrderComplete';
import MyPage from './pages/MyPage';
import CustomerSupport from './pages/CustomerSupport';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow pt-20"> {/* 수정: pt-16에서 pt-20으로 변경 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/community-type-selection" element={<CommunityTypeSelection />} />
            <Route path="/community-auth" element={<CommunityAuth />} />
            <Route path="/identity-verification" element={<IdentityVerification />} />
            <Route path="/service-explanation" element={<ServiceExplanation />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/my-page/*" element={<MyPage />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;