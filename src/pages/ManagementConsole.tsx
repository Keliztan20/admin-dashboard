
import React, { useState } from 'react';
import ManagementHeader from '@/components/ManagementHeader';
import TabNavigation from '@/components/TabNavigation';
import UserInsightsTable from '@/components/UserInsightsTable';
import SystemSettings from '@/components/SystemSettings';
import { UserData } from '@/components/UserInsightsTable';

const MOCK_USERS: UserData[] = [
  {
    id: '1',
    name: 'Ashen H',
    phoneNo: '9488222',
    loanType: 'Housing Loan',
    sentiment: 'Happy',
    summary: 'Regular payments'
  },
  {
    id: '2',
    name: 'Sarah M',
    phoneNo: '9477333',
    loanType: 'Vehicle Loan',
    sentiment: 'Neutral',
    summary: 'Recent inquiry'
  },
  {
    id: '3',
    name: 'John D',
    phoneNo: '9466444',
    loanType: 'Educational Loan',
    sentiment: 'Concerned',
    summary: 'Payment pending'
  },
  {
    id: '4',
    name: 'Emma W',
    phoneNo: '9455555',
    loanType: 'Housing Loan',
    sentiment: 'Happy',
    summary: 'Loan approved'
  },
  {
    id: '5',
    name: 'Michael R',
    phoneNo: '9446666',
    loanType: 'Vehicle Loan',
    sentiment: 'Neutral',
    summary: 'Documentation pending'
  }
];

const ManagementConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState('system');
  
  const tabs = [
    { id: 'system', label: 'System Insights' },
    { id: 'user', label: 'User Insights' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6 max-w-6xl">
        <ManagementHeader title="Management Console" />
        
        <div className="bg-white rounded-md shadow-sm border border-gray-100">
          <TabNavigation 
            tabs={tabs} 
            activeTabId={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <div className="p-6 border-2 m-2 mt-0 border-gray-200 rounded-b-md rounded-r-md">
            {activeTab === 'system' ? (
              <SystemSettings />
            ) : (
              <UserInsightsTable users={MOCK_USERS} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementConsole;
