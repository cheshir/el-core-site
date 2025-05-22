
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out";
  
  const variantStyles = {
    primary: 'bg-brand-accent text-brand-primary hover:bg-opacity-80 focus:ring-brand-accent-dark',
    secondary: 'bg-brand-secondary text-white hover:bg-opacity-90 focus:ring-brand-secondary',
    outline: 'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-primary focus:ring-brand-accent',
    link: 'text-brand-accent hover:text-brand-accent-dark underline focus:ring-brand-accent',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={props.target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={props.rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        className={combinedClassName}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
