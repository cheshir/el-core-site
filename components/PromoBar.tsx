
import React from 'react';
import { CloseIcon } from '../constants';

interface PromoBarProps {
  onClose: () => void;
}

export const PromoBar: React.FC<PromoBarProps> = ({ onClose }) => {
  return (
    <div className="bg-brand-primary text-brand-text p-2 text-center text-sm relative">
      <span>⏱️ First hire? Use code <strong className="font-bold text-brand-accent">REACTNOW</strong> for 20% off your first placement fee.</span>
      <button 
        onClick={onClose} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-brand-text hover:text-brand-accent"
        aria-label="Close promo bar"
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
