import { useEffect, useState } from 'react';

export function useColorMode() {
  const [colorMode, setColorMode] = useState<string>('light');

  useEffect(() => {
    const className = 'dark';
    const bodyClasses = window.document.body.classList;

    colorMode === 'dark'
      ? bodyClasses.add(className)
      : bodyClasses.remove(className);
  }, [colorMode]);

  return { colorMode, setColorMode };
}
