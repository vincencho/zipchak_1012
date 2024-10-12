import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, Bell, User, ChevronDown, Menu } from 'lucide-react';
import LocationModal from './LocationModal';

const Header: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState('잠실 헬리오시티');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLocationChange = (newLocation: string) => {
    setCurrentLocation(newLocation);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full z-10"> {/* Added fixed and z-10 */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">집착</Link>
        <div className="flex items-center">
          <button
            onClick={openModal}
            className="flex items-center bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-full mr-4 transition-colors"
          >
            <span className="mr-1 hidden sm:inline">현재 집착</span>
            <span className="font-semibold mr-1">{currentLocation}</span>
            <ChevronDown size={16} />
          </button>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="flex items-center"><Home size={20} className="mr-1" /> 홈</Link>
            <Link to="/product-list" className="flex items-center"><ShoppingBag size={20} className="mr-1" /> 상품</Link>
            <Link to="/my-page/notifications" className="flex items-center"><Bell size={20} className="mr-1" /> 알림</Link>
            <Link to="/my-page" className="flex items-center"><User size={20} className="mr-1" /> 마이페이지</Link>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="flex items-center"><Home size={20} className="mr-2" /> 홈</Link>
            <Link to="/product-list" className="flex items-center"><ShoppingBag size={20} className="mr-2" /> 상품</Link>
            <Link to="/my-page/notifications" className="flex items-center"><Bell size={20} className="mr-2" /> 알림</Link>
            <Link to="/my-page" className="flex items-center"><User size={20} className="mr-2" /> 마이페이지</Link>
          </nav>
        </div>
      )}
      {isModalOpen && (
        <LocationModal
          currentLocation={currentLocation}
          onLocationChange={handleLocationChange}
          onClose={closeModal}
        />
      )}
    </header>
  );
};

export default Header;