'use client';

import { useHover } from '@/hooks/useHover';
import { useTheme } from 'next-themes';

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
  const { theme } = useTheme();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const backgroundColor = isHovered
    ? theme === 'dark'
      ? 'black'
      : '#ffcc89'
    : theme === 'dark'
      ? '#777'
      : '#ebebeb';

  return (
    <button
      type={type}
      form={form}
      className={className}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children} {/* 전달된 children을 버튼 안에 렌더링 */}
    </button>
  );
};

export default HoverButton;
