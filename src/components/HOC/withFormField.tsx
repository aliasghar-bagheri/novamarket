import clsx from 'clsx';
import Label from '../ui/Label';
import { ComponentType, forwardRef } from 'react';
import { I_CommonPropsFormField } from '@/types';

export function withFormField<T extends object>(WrappedComponent: ComponentType<T>) {
  type TCompoProps = I_CommonPropsFormField & T;

  const Compo = forwardRef<T, TCompoProps>(
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
          className={clsx('max-w-3xl', {
            'flex items-start justify-between gap-3 flex-col sm:flex-row': layout === 'horizontal',
            'space-y-3': layout === 'vertical',
          })}
        >
          {label && (
            <Label
              htmlFor={name}
              className="text-nowrap"
            >
              {label}
              {isRequired && <span className="text-error ltr:ml-2 rtl:mr-2">*</span>}
            </Label>
          )}
          <div className="space-y-3 max-w-md w-full">
            <WrappedComponent
              name={name}
              className={clsx(className, {
                'border-none': borderless,
                'border-error focus-visible:ring-0': error,
              })}
              ref={ref}
              {...(props as T)}
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

  Compo.displayName = `withFormField(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return Compo;
}
