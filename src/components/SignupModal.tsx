import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

interface SignupModalProps {
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 구현합니다.
    console.log('회원가입:', { email, password });
    navigate('/store-setup');
  };

  const handleSocialSignup = (provider: string) => {
    // 실제 구현에서는 여기에 소셜 로그인 로직을 추가합니다.
    console.log(`${provider} 로그인 시도`);
    navigate('/store-setup');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-800">집착 회원가입</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            가입하기
          </button>
        </form>
        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center mb-4">또는 소셜 계정으로 가입</p>
          <div className="space-y-3">
            <button
              onClick={() => handleSocialSignup('Google')}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FaGoogle className="mr-2 text-red-600" /> Google로 가입
            </button>
            <button
              onClick={() => handleSocialSignup('Kakao')}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-yellow-100 hover:bg-yellow-200"
            >
              <SiKakaotalk className="mr-2 text-yellow-800" /> Kakao로 가입
            </button>
            <button
              onClick={() => handleSocialSignup('Naver')}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600"
            >
              <SiNaver className="mr-2" /> Naver로 가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;