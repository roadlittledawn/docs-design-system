import { useEffect, useRef, useMemo } from 'react';

type ModifierKey = 'cmd' | 'ctrl' | 'shift' | 'alt' | null;
type KeyCombination = [ModifierKey, string];

interface UseKeyPressOptions {
  ignoreTextInput?: boolean;
}

const normalizeKeyCombination = (keys: string): KeyCombination => {
  const parts = keys.split(/\s*\+\s*/);

  if (parts.length === 1) {
    return [null, parts[0]];
  }

  return [parts[0] as ModifierKey, parts[1]];
};

const matchesModifierKey = (modifier: ModifierKey, event: KeyboardEvent): boolean => {
  switch (modifier) {
    case null:
      return true;
    case 'cmd':
      return event.metaKey || event.ctrlKey;
    case 'ctrl':
      return event.ctrlKey;
    case 'shift':
      return event.shiftKey;
    case 'alt':
      return event.altKey;
    default:
      return false;
  }
};

const matchesAnyCombination = (
  combinations: KeyCombination[],
  event: KeyboardEvent
): boolean => {
  return combinations.some(
    ([modifier, key]) =>
      event.key === key && matchesModifierKey(modifier, event)
  );
};

const isTypingInInput = (event: KeyboardEvent): boolean => {
  const target = event.target as HTMLElement;
  return target.matches('input') || target.matches('textarea');
};

export const useKeyPress = (
  keys: string | string[],
  handler: (event: KeyboardEvent) => void,
  { ignoreTextInput = true }: UseKeyPressOptions = {}
): void => {
  const savedHandler = useRef(handler);

  const combinations = useMemo(
    () =>
      Array.isArray(keys)
        ? keys.map(normalizeKeyCombination)
        : [normalizeKeyCombination(keys)],
    [keys]
  );

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (ignoreTextInput && isTypingInInput(event)) {
        return;
      }

      if (matchesAnyCombination(combinations, event)) {
        savedHandler.current(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [combinations, ignoreTextInput]);
};
