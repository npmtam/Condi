import React, { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  icon
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#008060] hover:bg-[#006e52] text-white focus:ring-[#008060]',
    secondary: 'bg-blue-100 hover:bg-blue-200 text-blue-800 focus:ring-blue-300',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-blue-500'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;