import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const RulesSection: React.FC = () => {
  return (
    <div className="mb-8">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1">6 rules are currently activated</h3>
            <p className="text-sm text-gray-600">Unlock the potential of your business by creating tailored rules to meet your unique needs</p>
            <div className="mt-4">
              <div className="relative inline-block group">
                <Button variant="primary">Create rule</Button>
                
                {/* Animation indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full hidden md:block">
                  <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-75"></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-6">
            <img 
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Rules illustration" 
              className="w-[200px] rounded-md"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RulesSection;