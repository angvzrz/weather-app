import { Switch } from '@material-tailwind/react';
import { MoonIcon } from '@heroicons/react/20/solid';
import { useColorMode } from '@/hooks/useColorMode';

export function DarkModeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  const handleChange = () => {
    if (colorMode) {
      setColorMode(colorMode === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <div>
      <Switch
        color="pink"
        label={<MoonIcon className="w-8" />}
        containerProps={{ className: '-mr-2' }}
        onChange={handleChange}
      />
    </div>
  );
}
