import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`glassmorphism soft-shadow rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-2xl hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
