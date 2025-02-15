import clsx from 'clsx';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import { withFormField } from '../HOC/withFormField';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx('inputField min-h-60 w-full', className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default withFormField(Textarea);
