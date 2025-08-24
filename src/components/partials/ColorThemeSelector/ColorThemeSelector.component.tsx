'use client';

import { Button } from '@components';
import { useTheme } from '@contexts';
import { colorThemeOptions } from '@data';

export function ColorThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Colors:</span>
      <div className="flex gap-1">
        {colorThemeOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            size="icon"
            className={`w-8 h-8 p-0 rounded-full border-2 transition-all ${
              colorTheme === option.value
                ? 'border-primary scale-110'
                : 'border-transparent hover:border-muted-foreground'
            }`}
            onClick={() => setColorTheme(option.value)}
            title={option.name}
          >
            <div className={`w-5 h-5 rounded-full ${option.color}`} />
          </Button>
        ))}
      </div>
    </div>
  );
}
