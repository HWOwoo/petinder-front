import React from 'react';
import './Common.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string; // 외부 링크 또는 react-router-dom용
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, href, type = 'button' }) => {
  if (href) {
    return (
      <a href={href} className="common-button">
        {label}
      </a>
    );
  }

  return (
    <button type={type} className="common-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;