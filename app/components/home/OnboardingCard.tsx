import React from 'react';
import Card from '../ui/Card';
import { X } from 'lucide-react';

type OnboardingCardProps = {
  title: string;
  description: string;
  ctaText?: string;
  ctaAction?: () => void;
  onClose?: () => void;
  active?: boolean;
};

const OnboardingCard: React.FC<OnboardingCardProps> = ({
  title,
  description,
  ctaText,
  ctaAction,
  onClose,
  active = false
}) => {
  return (
    <Card className={`h-full transition-all duration-300 ${active ? 'ring-2 ring-[#008060] transform scale-[1.02]' : ''}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-base font-medium text-gray-900 truncate">{title}</h3>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-6 flex-grow">{description}</p>
        {ctaText && (
          <div className="mt-auto">
            <button 
              onClick={ctaAction}
              className="inline-flex items-center text-sm font-medium text-[#5C6AC4] hover:text-[#3D4785] transition-colors"
            >
              {ctaText}
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default OnboardingCard;