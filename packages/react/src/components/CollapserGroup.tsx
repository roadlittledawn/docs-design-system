'use client';

import React, { useState, Children, cloneElement, isValidElement } from 'react';
import { Collapser } from './Collapser';

export interface CollapserGroupProps {
  /** Collapser components to render inside the group */
  children: React.ReactNode;
  /** Spacing between collapsers (CSS gap value) */
  spacing?: string;
  /** Allow multiple collapsers to be open simultaneously */
  allowMultiple?: boolean;
  /** Index(es) of collapser(s) that should be open by default */
  defaultOpen?: number | number[];
  /** Callback when collapser open state changes */
  onChange?: (openIndexes: number[]) => void;
  /** Additional CSS classes */
  className?: string;
  /**
   * Automatically prefix each collapser header with a sequential step number (1, 2, 3…).
   * The number is injected via the `stepNumber` prop on each `Collapser` child.
   * @default false
   */
  numbered?: boolean;
}

export const CollapserGroup: React.FC<CollapserGroupProps> = ({
  children,
  spacing = '0.5rem',
  allowMultiple = true,
  defaultOpen,
  onChange,
  className = '',
  numbered = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(() => {
    if (defaultOpen === undefined) return [];
    return Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen];
  });

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      let next: number[];
      
      if (allowMultiple) {
        next = prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      } else {
        next = prev.includes(index) ? [] : [index];
      }
      
      onChange?.(next);
      return next;
    });
  };

  return (
    <div className={`dds-collapser-group ${className}`.trim()} style={{ gap: spacing }}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        
        // Only inject props if child is a Collapser component
        if (child.type === Collapser) {
          return cloneElement(child, {
            ...child.props,
            open: openIndexes.includes(index),
            onToggle: () => handleToggle(index),
            ...(numbered ? { stepNumber: index + 1 } : {}),
          } as any);
        }
        
        return child;
      })}
    </div>
  );
};

CollapserGroup.displayName = 'CollapserGroup';
