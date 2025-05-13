import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hover = true
}) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${hover ? 'hover:shadow-md transition-all duration-300 hover:scale-[1.01]' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;