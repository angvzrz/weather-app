import { useEffect, useState } from 'react';

export function useColorMode() {
  const [colorMode, setColorMode] = useState<string>('light');

  useEffect(() => {
    const className = 'dark';
    const bodyClasses = window.document.body.classList;

    if (colorMode === 'dark') {
      bodyClasses.add(className);
      bodyClasses.add('bg-wr-oxford-blue');
    } else {
      bodyClasses.remove(className);
      bodyClasses.remove('bg-wr-oxford-blue');
    }
  }, [colorMode]);

  return { colorMode, setColorMode };
}
