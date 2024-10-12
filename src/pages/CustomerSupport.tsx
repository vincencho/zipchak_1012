import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const CustomerSupport: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const faqItems: FAQItem[] = [
    {
      question: '공동구매는 어떻게 진행되나요?',
      answer: '공동구매는 여러 사람이 함께 제품을 구매하여 할인된 가격으로 구매하는 방식입니다. 충분한 인원이 모이면 주문이 진행되고, 모든 참여자가 할인 혜택을 받게 됩니다.'
    },
    {
      question: '최소 구매 인원에 도달하지 못하면 어떻게 되나요?',
      answer: '공동구매 기간 내에 최소 구매 인원에 도달하지 못하면 주문이 진행되지 않으며, 결제도 이루어지지 않습니다.'
    },
    {
      question: '배송은 얼마나 걸리나요?',
      answer: '배송 시간은 제품과 위치에 따라 다릅니다. 일반적으로 주문은 1-3 영업일 내에 처리되며, 배송은 5-10 영업일이 소요됩니다.'
    },
    {
      question: '주문을 취소할 수 있나요?',
      answer: '공동구매 기간이 끝나기 전에는 주문을 취소할 수 있습니다. 하지만 공동구매가 성사되어 공급업체에 주문이 들어간 후에는 취소가 불가능합니다.'
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">고객 지원</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{item.question}</span>
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">문의하기</h2>
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">이름</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">이메일</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">메시지</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            메시지 보내기
          </button>
        </form>
      </section>
    </div>
  );
};

export default CustomerSupport;