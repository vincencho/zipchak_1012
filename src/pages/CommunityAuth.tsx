import React, { useState } from 'react';

const CommunityAuth: React.FC = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated search results
    setResults(['Community A', 'Community B', 'Community C']);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community Authentication</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your community"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
      {results.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommunityAuth;