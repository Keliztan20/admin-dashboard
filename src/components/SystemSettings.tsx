
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const SystemSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">System Insights</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Savings Section</h3>
        <div className="flex items-end gap-4">
          <div className="w-full max-w-xs">
            <div className="text-sm text-gray-500 mb-1">Account Type</div>
            <Select defaultValue="savings">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="savings">Savings Account</SelectItem>
                <SelectItem value="checking">Currnet Account</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full max-w-xs">
            <div className="text-sm text-gray-500 mb-1">Amount (LKR)</div>
            <Input type="number" placeholder="0.00" className="w-full" />
          </div>
          
          <Button>Update</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Loan Section</h3>
        <div className="flex items-end gap-4">
          <div className="w-full max-w-xs">
          <div className="text-sm text-gray-500 mb-1">Loan Type</div>
            <Select defaultValue="vehicle">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                <SelectItem value="housing">Housing Loan</SelectItem>
                <SelectItem value="education">Educational Loan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full max-w-xs">
            <div className="text-sm text-gray-500 mb-1">Interest Rate (%)</div>
            <Input type="number" placeholder="0.0" className="w-full" />
          </div>
          
          <Button>Update</Button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
