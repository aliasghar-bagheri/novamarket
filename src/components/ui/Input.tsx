'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { withFormField } from '../HOC/withFormField';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, name, ...props }, ref) => {
    return (
      <input
        name={name}
        ref={ref}
        className={clsx('inputField w-full', className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default withFormField(Input);
