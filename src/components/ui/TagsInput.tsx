'use client';

import { forwardRef, InputHTMLAttributes, KeyboardEvent, useState } from 'react';
import { withFormField } from '../HOC/withFormField';
import clsx from 'clsx';

interface TagsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  tags?: string[];
  onChangeTags: (tags: string[]) => void;
}

const TagsInput = forwardRef<HTMLInputElement, TagsInputProps>(
  ({ className, tags = [], name, onChangeTags, ...props }, ref) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const input = inputValue.trim();
      if (event.key === 'Enter' && input !== '') {
        event.preventDefault();
        if (!tags.includes(input)) {
          onChangeTags([...tags, input]);
        }
        setInputValue('');
      }
      if (event.key === 'Backspace' && tags.length > 0 && !input) {
        onChangeTags(tags.slice(0, -1));
      }
    };

    const removeTag = (tagIndex: number) => {
      onChangeTags(tags.filter((_, index) => index !== tagIndex));
    };

    return (
      <div className="inputField p-1 flex items-center gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="bg-secondary-100 py-1 px-2 flex items-center gap-x-1 rounded flex-nowrap text-nowrap text-sm"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="text-xl"
            >
              &times;
            </button>
          </p>
        ))}
        <input
          type="text"
          name={name}
          ref={ref}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          className={clsx('inputField border-none focus-visible:ring-0', className)}
          {...props}
        />
      </div>
    );
  }
);

TagsInput.displayName = 'TagsInput';

export default withFormField(TagsInput);
