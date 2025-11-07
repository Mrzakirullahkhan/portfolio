import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export default function Button({ children, variant = 'primary', className = '', ...rest }: Props) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium focus:outline-none";
  const styles =
    variant === 'primary'
      ? "bg-accent text-white hover:brightness-95"
      : "bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
