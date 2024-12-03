'use client';

import { useHover } from '@/hooks/useHover';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface HoverButtonProps {
  type: 'submit' | 'button';
  form?: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const HoverButton = ({
  type,
  form = '',
  className,
  onClick,
  children,
}: HoverButtonProps) => {
  const { resolvedTheme } = useTheme();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  useEffect(() => {
    const defaultColor = resolvedTheme === 'dark' ? '#777' : '#ebebeb';
    const hoverColor = resolvedTheme === 'dark' ? 'black' : '#ffcc89';

    setBackgroundColor(isHovered ? hoverColor : defaultColor);
  }, [resolvedTheme, isHovered]);

  return (
    <button
      suppressHydrationWarning
      type={type}
      form={form}
      className={className}
      onClick={onClick}
      style={{ backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default HoverButton;
