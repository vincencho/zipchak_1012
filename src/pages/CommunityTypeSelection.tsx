import React from 'react';

const CommunityTypeSelection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select Community Type</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {['Apartment', 'Co-living Space', 'Company', 'School', 'Other'].map((type) => (
          <button
            key={type}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded-lg transition-colors"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommunityTypeSelection;