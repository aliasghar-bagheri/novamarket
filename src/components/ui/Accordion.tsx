'use client';

import { createContext, forwardRef, HTMLAttributes, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface IAccordionContent {
  open: boolean;
  handleToggle: () => void;
}

const AccordionContext = createContext<IAccordionContent>({
  open: false,
  handleToggle: () => {},
});

const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) throw new Error('useAccordion should be used within AccordionContext');

  return context;
};

const Accordion = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((curr) => !curr);

    return (
      <AccordionContext.Provider value={{ open, handleToggle }}>
        <div
          ref={ref}
          {...props}
          className={`w-full space-y-3 ${className}`}
        />
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

const AccordionItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
    />
  );
});

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => {
    const { open, handleToggle } = useAccordion();
    return (
      <div
        ref={ref}
        {...props}
        role="button"
        onClick={handleToggle}
        className={`flex items-center gap-x-2 bg-secondary-0 cursor-pointer px-3 py-4 border-b-2 border-b-secondary-50 justify-between select-none font-medium text-sm ${
          open ? 'rounded-t-lg' : 'rounded-lg'
        } ${className}`}
      >
        {children}
        <ChevronDown
          size={16}
          className={`transition ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => {
    const { open } = useAccordion();
    return (
      <div
        ref={ref}
        {...props}
        className={`grid overflow-hidden transition-all duration-200 ease-in-out p-4 bg-secondary-0 rounded-b-lg ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        } ${className}`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
