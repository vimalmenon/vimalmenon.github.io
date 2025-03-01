'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors, Icons, shades } from '@data';
import { AnyType } from '@types';
import { ColorItem } from './ColorItem';

export const SelectTheme: React.FC = () => {
  const [theme, setTheme] = useState<Record<string, string>>({});
  const [selectedColor, setColor] = useState<AnyType>(null);
  const removeColor = (type: string): string => {
    const { [type]: _, ...rest } = theme;
    setTheme(rest);
    return _;
  };
  const onShadeClick = (selectedColor: string): void => {
    if (!theme.main) {
      setTheme({
        ...theme,
        main: selectedColor,
      });
      return;
    }
    if (!theme.dark) {
      setTheme({
        ...theme,
        dark: selectedColor,
      });
      return;
    }
    setTheme({
      ...theme,
      light: selectedColor,
    });
  };
  const onColorClick = (color: AnyType): void => {
    setColor(color);
    setTheme({});
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box
          sx={{
            background: theme.main ? theme.main : 'white',
            border: '1px solid red',
            display: 'flex',
            height: '70px',
            width: '70px',
          }}
        >
          <Icons.Close fontSize="small" onClick={() => removeColor('main')} />
          main
        </Box>
        <Box
          sx={{
            background: theme.dark ? theme.dark : 'white',
            border: '1px solid red',
            display: 'flex',
            height: '70px',
            width: '70px',
          }}
        >
          <Icons.Close fontSize="small" onClick={() => removeColor('dark')} />
          dark
        </Box>
        <Box
          sx={{
            background: theme.light ? theme.light : 'white',
            border: '1px solid red',
            display: 'flex',
            height: '70px',
            width: '70px',
          }}
        >
          <Icons.Close fontSize="small" onClick={() => removeColor('light')} />
          light
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {Object.keys(colors).map((color) => {
            return (
              <Box key={color}>
                <ColorItem
                  color={(colors as AnyType)[color][500]}
                  name={color}
                  onClick={() => onColorClick((colors as AnyType)[color])}
                  selectedColor={selectedColor ? selectedColor[500] : undefined}
                />
              </Box>
            );
          })}
        </Box>
        {selectedColor ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {shades.map((shade: string | number, index) => {
              return (
                <ColorItem
                  color={selectedColor[shade]}
                  key={`${selectedColor[shade]}-${index}`}
                  name={String(shade)}
                  onClick={() => onShadeClick(selectedColor[shade])}
                  main={theme.main}
                  dark={theme.dark}
                  light={theme.light}
                />
              );
            })}
          </Box>
        ) : null}
      </Box>
      <Button variant="contained">Save</Button>
      <Button variant="contained">Cancel</Button>
    </Box>
  );
};
