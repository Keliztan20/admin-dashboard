
import React from 'react';

export interface UserData {
  id: string;
  name: string;
  phoneNo: string;
  loanType: string;
  sentiment: 'Happy' | 'Neutral' | 'Concerned';
  summary: string;
}

interface UserInsightsTableProps {
  users: UserData[];
}

const UserInsightsTable: React.FC<UserInsightsTableProps> = ({ users }) => {
  return (
  <div>
    <h2 className="text-xl font-bold mb-4">User Insights</h2>
    <div className="border rounded-md">
      <div className="grid grid-cols-5 gap-4 px-4 py-3 border-b bg-gray-50 ">
        <div className="font-bold text-gray-900">Name</div>
        <div className="font-bold text-gray-900">Phone No</div>
        <div className="font-bold text-gray-900">Loan Type</div>
        <div className="font-bold text-gray-900">Sentiment</div>
        <div className="font-bold text-gray-900">Summary</div>
      </div>
      {users.map((user) => (
        <div key={user.id} className="grid grid-cols-5 gap-4 px-4 py-4 border-b last:border-b-0">
          <div>{user.name}</div>
          <div>{user.phoneNo}</div>
          <div>{user.loanType}</div>
          <div className="flex justify-right items-center">
            <span 
              className={`px-3 py-1 rounded-full text-xs font-medium w-24 text-center ${
                user.sentiment === 'Happy' 
                  ? 'bg-green-100 text-green-800' 
                  : user.sentiment === 'Neutral'
                  ? 'bg-gray-100 text-gray-600'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {user.sentiment}
            </span>
          </div>
          <div>{user.summary}</div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default UserInsightsTable;
