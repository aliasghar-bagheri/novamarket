import clsx from 'clsx';
import { forwardRef, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { withFormField } from '../HOC/withFormField';

const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={clsx('inputField w-full', className)}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

export const Option = forwardRef<HTMLOptionElement, OptionHTMLAttributes<HTMLOptionElement>>(
  (props, ref) => {
    return (
      <option
        ref={ref}
        {...props}
      />
    );
  }
);

Option.displayName = 'Option';

export default withFormField(Select);
