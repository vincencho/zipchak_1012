import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, ShoppingBag, Bell, CreditCard, Settings as SettingsIcon } from 'lucide-react';

const MyPage: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === `/my-page${path}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">마이페이지</h1>
      <div className="flex flex-col md:flex-row">
        <nav className="w-full md:w-1/4 mb-6 md:mb-0">
          <ul className="space-y-2">
            <li>
              <Link
                to="/my-page/profile"
                className={`flex items-center p-2 rounded-md ${
                  isActive('/profile') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <User size={20} className="mr-2" />
                프로필
              </Link>
            </li>
            <li>
              <Link
                to="/my-page/orders"
                className={`flex items-center p-2 rounded-md ${
                  isActive('/orders') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <ShoppingBag size={20} className="mr-2" />
                주문 내역
              </Link>
            </li>
            <li>
              <Link
                to="/my-page/notifications"
                className={`flex items-center p-2 rounded-md ${
                  isActive('/notifications') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <Bell size={20} className="mr-2" />
                알림
              </Link>
            </li>
            <li>
              <Link
                to="/my-page/payments"
                className={`flex items-center p-2 rounded-md ${
                  isActive('/payments') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <CreditCard size={20} className="mr-2" />
                결제 수단
              </Link>
            </li>
            <li>
              <Link
                to="/my-page/settings"
                className={`flex items-center p-2 rounded-md ${
                  isActive('/settings') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}>
                <SettingsIcon size={20} className="mr-2" />
                설정
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-full md:w-3/4 md:pl-6">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="payments" element={<Payments />} />
            <Route path="settings" element={<SettingsComponent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const Profile: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">프로필</h2>
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-6">
        <img src="https://source.unsplash.com/random/100x100?face" alt="Profile" className="w-20 h-20 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">홍길동</h3>
          <p className="text-gray-600">hong.gildong@example.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">이름</label>
          <input type="text" value="홍길동" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">이메일</label>
          <input type="email" value="hong.gildong@example.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">전화번호</label>
          <input type="tel" value="010-1234-5678" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        프로필 수정
      </button>
    </div>
  </div>
);

const Orders: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">주문 내역</h2>
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문 번호</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상품</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">#12345</td>
            <td className="px-6 py-4 whitespace-nowrap">스마트 TV</td>
            <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                완료
              </span>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">#12346</td>
            <td className="px-6 py-4 whitespace-nowrap">무선 이어버드</td>
            <td className="px-6 py-4 whitespace-nowrap">2024-03-10</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                진행 중
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Notifications: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">알림</h2>
    <div className="space-y-4">
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold">새로운 공동구매 오픈</h3>
        <p className="text-gray-600">스마트 홈 기기에 대한 새로운 공동구매가 시작되었습니다. 지금 참여하세요!</p>
        <p className="text-sm text-gray-500 mt-2">2시간 전</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold">주문 상태 업데이트</h3>
        <p className="text-gray-600">주문 번호 #12346이 발송되었습니다. 배송 추적을 시작하세요.</p>
        <p className="text-sm text-gray-500 mt-2">1일 전</p>
      </div>
    </div>
  </div>
);

const Payments: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">결제 수단</h2>
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">등록된 결제 수단</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-md">
          <div className="flex items-center">
            <CreditCard size={24} className="mr-4" />
            <div>
              <p className="font-semibold">신한카드 1234</p>
              <p className="text-sm text-gray-600">만료일: 12/2025</p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800">수정</button>
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        결제 수단 추가
      </button>
    </div>
  </div>
);

const SettingsComponent: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">설정</h2>
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">계정 설정</h3>
      <div className="space-y-4">
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">이메일 알림 받기</span>
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">2단계 인증 사용</span>
          </label>
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        변경사항 저장
      </button>
    </div>
  </div>
);

export default MyPage;