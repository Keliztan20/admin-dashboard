
import React from 'react';

interface ManagementHeaderProps {
  title: string;
}

const ManagementHeader: React.FC<ManagementHeaderProps> = ({ title }) => {
  return (
    <div className="py-2 px-3 bg-white rounded-md mb-1">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </div>
  );
};

export default ManagementHeader;
