'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '@/hooks/useClickOutside';
import Button from './Button';
import { CircleXIcon } from 'lucide-react';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  const [isClient, setIsClient] = useState(false);

  const dialogContentRef = useRef<HTMLDivElement>(null);

  useClickOutside(dialogContentRef, onClose);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && open
    ? createPortal(
        <>
          {/* Overlay */}
          <div
            className={`fixed pointer-events-none top-0 left-0 w-full h-screen transition duration-100 bg-secondary-300/30 backdrop-blur z-50 ${
              open ? 'block' : 'pointer-events-none hidden'
            }`}
          ></div>
          <div
            className={`w-full absolute top-0 left-0 z-[60] h-full flex items-center justify-center px-4 animate-dropIn`}
          >
            <div
              ref={dialogContentRef}
              className="max-w-xl w-full p-5 rounded space-y-6 bg-secondary-0"
            >
              <div className="flex items-center justify-between gap-3 border-b border-b-secondary-200 pb-4">
                <h5 className="text-xl font-bold">{title}</h5>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="p-2"
                >
                  <CircleXIcon />
                </Button>
              </div>
              <div className="w-full">{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Dialog;
