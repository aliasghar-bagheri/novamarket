import clsx from 'clsx';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import Label from './Label';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isRequired?: boolean;
  label?: string;
  error?: string;
  description?: string;
  layout?: 'vertical' | 'horizontal';
  borderless?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className = '',
      label,
      borderless,
      name,
      error,
      description,
      layout = 'vertical',
      isRequired,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx('max-w-3xl', className, {
          'flex items-start justify-between gap-3 flex-col sm:flex-row': layout === 'horizontal',
          'space-y-3': layout === 'vertical',
        })}
      >
        {label && (
          <Label htmlFor={name}>
            {label}
            {isRequired && <span className="text-error ltr:ml-2 rtl:mr-2">*</span>}
          </Label>
        )}
        <div className="space-y-3 max-w-md w-full">
          <textarea
            name={name}
            ref={ref}
            className={clsx('inputField min-h-60 w-full', {
              'border-none': borderless,
              'border-error focus-visible:ring-0': error,
            })}
            {...props}
          />
          {error && <p className="text-error text-sm">{error.toString()}</p>}
          {description && (
            <p className="text-xs text-secondary-600 leading-5">{description.toString()}</p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
