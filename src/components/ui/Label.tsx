import { forwardRef, LabelHTMLAttributes } from 'react';

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={`text-sm font-medium ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export default Label;
