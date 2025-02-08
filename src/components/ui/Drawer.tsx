'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CircleXIcon } from 'lucide-react';
import { useClickOutside } from '@/hooks/useClickOutside';
import Button from './Button';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Drawer({ open, onClose, children, className = '' }: DrawerProps) {
  const [isClient, setIsClient] = useState(false);

  const drawerContentRef = useRef<HTMLDivElement>(null);

  useClickOutside(drawerContentRef, onClose);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient &&
    createPortal(
      <>
        {/* Overlay */}
        <div
          className={`fixed ${
            open ? 'block' : 'pointer-events-none hidden'
          } pointer-events-none top-0 left-0 w-full h-screen bg-secondary-200/10 duration-200 backdrop-blur-sm z-50`}
        ></div>
        {/* Drawer content */}
        <div
          role="dialog"
          ref={drawerContentRef}
          className={`fixed right-0 top-0 w-full max-w-64 sm:max-w-80 overflow-y-auto duration-200 bg-secondary-0 h-screen p-5 z-50 transition-transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          } space-y-8 flex animate-fade-in-right flex-col shadow-lg`}
        >
          {/* Close button */}
          <div>
            <Button
              onClick={onClose}
              variant="outline"
            >
              <CircleXIcon />
            </Button>
          </div>

          <div className={`mt-auto h-full ${className}`}>{children}</div>
        </div>
      </>,
      document.body
    )
  );
}
