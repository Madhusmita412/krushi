import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap active:scale-95';

  const variants = {
    primary: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:shadow-green-500/40 hover:-translate-y-1',
    secondary: 'bg-yellow-400 hover:bg-yellow-300 text-yellow-950 shadow-[0_8px_20px_rgba(250,204,21,0.3)] hover:shadow-yellow-400/40 hover:-translate-y-1',
    outline: 'border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:-translate-y-1',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}
