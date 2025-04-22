
import React from 'react';
import { cn } from '@/lib/utils';

interface TabNavigationProps {
  tabs: Array<{
    id: string;
    label: string;
  }>;
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  return (
    <div className="flex space-x-1 pt-2 pl-[8px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "px-6 py-2 text-base",
            activeTabId === tab.id
              ? "bg-gray-200 text-gray-900 hover:bg-gray-100 rounded-t-md font-bold"
              : "bg-white text-gray-900 hover:bg-gray-100 rounded-t-md", 
          )}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}      
    </div>    
  );
};

export default TabNavigation;
