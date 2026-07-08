import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { X } from 'lucide-react';

interface AutocompleteTagsProps {
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  maxTags?: number;
}

export function AutocompleteTags({ options, placeholder, value, onChange, className, maxTags }: AutocompleteTagsProps) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const tags = value ? value.split(',').map(t => t.trim()).filter(Boolean) : [];

  // Derived state: calculate suggestions directly during render (Production Safe)
  const suggestions = (() => {
    if (inputValue.trim()) {
      const filtered = options.filter(
        opt => opt.toLowerCase().includes(inputValue.toLowerCase()) && !tags.includes(opt)
      );
      return filtered.slice(0, 8);
    }
    return options.filter(opt => !tags.includes(opt)).slice(0, 8);
  })();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to selected item
  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
         selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  const addTag = (tag: string) => {
    if (maxTags && tags.length >= maxTags) return;
    const newTags = [...tags, tag];
    onChange(newTags.join(', '));
    setInputValue('');
    setIsFocused(true); 
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    onChange(newTags.join(', '));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (maxTags && tags.length >= maxTags) return;
      
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
         addTag(suggestions[selectedIndex]);
      } else if (suggestions.length > 0 && inputValue.trim().length > 0) {
        addTag(suggestions[0]);
      } else if (inputValue.trim()) {
        addTag(inputValue.trim());
      }
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  const isLimitReached = maxTags ? tags.length >= maxTags : false;

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      <div className={`flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 min-h-[42px] items-center ${isLimitReached ? 'bg-gray-50' : ''}`}>
        {tags.map((tag, idx) => (
          <span key={idx} className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm font-medium border border-blue-100">
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-blue-900 focus:outline-none ml-1">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        {!isLimitReached && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSelectedIndex(-1);
            }}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : ''}
            className="flex-grow outline-none text-sm min-w-[120px] bg-transparent py-0.5"
          />
        )}
      </div>
      
      {isLimitReached && <p className="text-xs text-orange-500 mt-1">Maximum limit of {maxTags} reached.</p>}

      {isFocused && suggestions.length > 0 && !isLimitReached && (
        <ul ref={listRef} className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto py-1">
          {suggestions.map((suggestion, idx) => (
            <li
              key={idx}
              className={`px-4 py-2 cursor-pointer text-sm flex items-center justify-between ${idx === selectedIndex ? 'bg-blue-100 text-blue-900' : 'hover:bg-blue-50 text-gray-700'}`}
              onMouseEnter={() => setSelectedIndex(idx)}
              onClick={() => addTag(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
